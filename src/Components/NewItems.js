import React, { Component } from "react";

export default class NewItems extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, date, author } = this.props;
    return (
      <>
        <div className="card">
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAh8YVQhMCGhp1xDo9Pew7q0W4H1zLD-9wbA&usqp=CAU"
            }
            width={"286px"}
            height={"210px"}
            alt="..."
          />

          <div className="card-body">
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} <br /> Published At :
                {new Date(date).toDateString()}
              </small>
            </p>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
