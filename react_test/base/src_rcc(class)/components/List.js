import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <>
        <h3>list</h3>
        <ul>
          {this.props.data.names.map((item, idx) => (
            <li key={idx}>
              {item}{" "}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => {
                  this.props.onDelete(idx);
                }}>
                x
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default List;
