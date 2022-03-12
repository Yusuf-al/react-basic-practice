import React, { Component } from "react";
import Loader from "./Loader";
import NewItems from "./NewItems";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "genaral",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: true,
      page: 1,
      totalArticles: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - News-app`;
  }

  capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  async componentDidMount() {
    this.updateNews();
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d93c1d3db3f644258de37dd44561caac&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.setState({ loading: true });
    let parseData = await data.json();
    this.setState({
      article: parseData.articles,
      totalArticles: parseData.totalResults,
      loading: false,
    });
  }
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d93c1d3db3f644258de37dd44561caac&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: this.state.article.concat(parseData.articles),
      totalArticles: parseData.totalResults,
    });
  };

  // handleNext = async () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.updateNews(this.state.page + 1);
  // };
  // handlePre = async () => {
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.updateNews(this.state.page - 1);
  // };

  render() {
    return (
      <>
        <div className="container my-4">
          <h3 className="my-3 text-center">
            News App- The most viewed news site
          </h3>
          {this.state.loading && <Loader />}
          <InfiniteScroll
            dataLength={this.state.article.length}
            next={this.fetchMoreData}
            hasMore={this.state.article.length !== this.state.totalArticles}
            loader={<Loader />}
          >
            <div className="container my-4">
              <div className="row d-flex justify-content-center">
                {this.state.article.map((ele, idx) => {
                  return (
                    <div className="col-lg-3 col-md-6 col-12 my-4" key={idx}>
                      <NewItems
                        title={ele.title ? ele.title.slice(0, 40) : ""}
                        description={
                          ele.description ? ele.description.slice(0, 100) : ""
                        }
                        imgUrl={ele.urlToImage ? ele.urlToImage : ""}
                        newsUrl={ele.url}
                        date={ele.publishedAt}
                        author={ele.author}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}
