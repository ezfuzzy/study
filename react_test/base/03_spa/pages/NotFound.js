import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <>
        <h2>404 Not Found</h2>
        <Link to="/">Home</Link>
      </>
    );
  }
}

export default NotFound;
