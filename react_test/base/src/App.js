import React, { Component } from "react";

class App extends Component {
  // state definition
  state = {
    count: 0,
  };

  // rcc => class형 component : Component를 상속받아서 만듬
  // rcs => function형 Component : 함수형임
  render() {
    return (
      <div>
        <h1>index page</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}>
          {this.state.count}
        </button>
      </div>
    );
  }
}

export default App;
