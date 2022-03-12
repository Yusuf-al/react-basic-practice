import React from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News key={"general"} pageSize={8} category={"general"} />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News key={"business"} pageSize={8} category={"business"} />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News key={"technology"} pageSize={8} category={"technology"} />
              }
            />
            <Route
              exact
              path="/sports"
              element={<News key={"sports"} pageSize={8} category={"sports"} />}
            />
            <Route
              exact
              path="/science"
              element={
                <News key={"science"} pageSize={8} category={"science"} />
              }
            />
            <Route
              exact
              path="/health"
              element={<News key={"health"} pageSize={8} category={"health"} />}
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key={"entertainment"}
                  pageSize={8}
                  category={"entertainment"}
                />
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
