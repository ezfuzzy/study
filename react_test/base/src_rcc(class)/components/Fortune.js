import React, { Component } from "react";

class Fortune extends Component {
  /**
   * 부모에서 전달한 property는 자식에서 this.props로 참조가능
   */
  render() {
    return (
      <>
        <h3>Fortune</h3>
        <p>
          today's Fortune : <strong>{this.props.data.fortuneToday}</strong>
        </p>
      </>
    );
  }
}

export default Fortune;
