import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              News App
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/business">
                  Business
                </Link>
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
                <Link className="nav-link" to="/health">
                  Health
                </Link>
                <Link className="nav-link" to="/science">
                  Science
                </Link>
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
