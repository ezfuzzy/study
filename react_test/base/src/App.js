import React, { Component } from "react";

class App extends Component {
  // state definition
  state = {
    count1: 0,
    count2: 0,
    count3: 0,
    msg: "",
    names: [],
    name: "",
  };

  clicked2 = () => {
    this.setState({
      ...this.state,
      count2: this.state.count2 + 2,
      tdl: "u know that",
    });
  };

  clicked3 = () => {
    this.setState({ count3: this.state.count3 + 3 });
  };

  getData = () => {
    this.setState({ names: ["ezfz", "hysz", "lessa"] });
  };

  addData = () => {
    this.setState({ names: [...this.state.names, this.state.name] });
  };
  // rcc => class형 component : Component를 상속받아서 만듬
  // rcs => function형 Component : 함수형임
  render() {
    return (
      <div>
        <h1>about state</h1>
        <button
          onClick={() => {
            this.setState({ count1: this.state.count1 + 1 });
          }}>
          {this.state.count1}
        </button>
        <button onClick={this.clicked2}>{this.state.count2}</button>
        <button onClick={this.clicked3}>{this.state.count3}</button>
        <input
          type="text"
          onInput={(event) => {
            this.setState({
              ...this.state,
              msg: event.target.value,
            });
          }}
        />
        <p>{this.state.msg}</p>
        {/* -------------------------------------------- */}
        <button onClick={this.getData}>getData</button>
        <input
          type="text"
          onInput={(event) => {
            this.setState({
              ...this.state,
              name: event.target.value,
            });
          }}
        />
        <button onClick={this.addData}>add</button>
        <ul>
          {this.state.names.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
