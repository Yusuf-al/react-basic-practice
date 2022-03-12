import React, { Component } from "react";
import loading from "./loading.gif";

export default class Loader extends Component {
  render() {
    return (
      <div className="text-center mt-5">
        <img src={loading} alt="Loading" />
      </div>
    );
  }
}
