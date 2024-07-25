import React, { Component } from "react";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Math from "./Math";
import Japanese from "./Japanese";

// js로 route 이동하기 위해 필요한 함수
// study component에서 this.props.navigate() 함수 사용 가능
function withNavigation(Comp) {
  return (props) => <Comp {...props} navigate={useNavigate()} />;
}

class Study extends Component {
  render() {
    return (
      <>
        <h2>Study page</h2>
        <p>-----------</p>
        <ul>
          <li><NavLink to="/study/math">math</NavLink></li>
          <li><NavLink to="/study/japanese">japanese</NavLink></li>
        </ul>
        <Routes>
          <Route path="/math" Component={Math} />
          <Route path="/japanese" Component={Japanese} />
        </Routes>
        <Link to="/">Home</Link>
        <button onClick={() => {this.props.navigate("/")}}>Home</button>
      </>
    );
  }
}

export default withNavigation(Study);
