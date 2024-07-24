import React, { Component } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import { Home, NotFound, Play, Post, Study } from "./pages";


class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>index page</h1>
        <h3>----------</h3>
        <ul className="nav nav-pills">
          <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/play">Play</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/study">Study</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/post">Post</NavLink></li>
        </ul>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/play" Component={Play} />
          <Route path="/study/*" Component={Study} />
          <Route path="/post" Component={Post} />
          <Route path="/*" Component={NotFound} />
        </Routes>
      </div>
    );
  }
}

export default App;
