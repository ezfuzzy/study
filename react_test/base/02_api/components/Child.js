import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <>
        <h3>Child component</h3>
        <button
          className="btn btn-info"
          onClick={(event) => {
            event.target.innerText = "clicked";
          }}>
          click~
        </button>
      </>
    );
  }
}

export default Child;
