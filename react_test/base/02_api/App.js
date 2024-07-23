import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import Child from "./components/Child";
import Fortune from "./components/Fortune";
import List from "./components/List";
import { Button } from "react-bootstrap";

//클래스형 component
class App extends Component {
  state = {
    fortuneToday: "rainy day",
    names: ["ezfz", "hysz", "lessa"],
  };

  render() {
    return (
      <div className="container">
        <h1>인덱스 페이지 입니다</h1>
        <div className="box mb-3"></div>
        <button className="btn btn-primary">good</button>
        <Child />
        <button
          className="btn btn-primary"
          onClick={() => {
            this.setState({
              ...this.state,
              fortuneToday: "burger day",
            });
          }}>
          reroll
        </button>
        <Fortune data={this.state} />
        <List
          data={this.state}
          onDelete={(idx) => {
            const newArr = this.state.names.filter((name, index) => index !== idx);
            this.setState({
              ...this.state,
              names: newArr,
            });
          }}
        />

        {/* react-bootstrap component */}

        <Button variant="primary">click</Button>
      </div>
    );
  }
}

export default App;
