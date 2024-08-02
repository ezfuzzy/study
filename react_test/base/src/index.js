import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { decodeToken } from "jsontokens";

let userName = null;
let isSignIn = false;

if (localStorage.token) {
  const result = decodeToken(localStorage.token.substring(7));
  console.log(result);
  const expTime = result.payload.exp * 1000;
  const now = new Date().getTime();

  if (expTime > now) {
    userName = result.payload.sub;
    isSignIn = true;
  } else {
    delete localStorage.token;
  }
}

const initialState = { userName, isSignIn };

const reducer = (state = initialState, action) => {
  let newState;
  if (action.type === "user_signIn") {
    newState = {
      ...state,
      userName: action.payload,
      isSignIn: true,
    };
  } else if (action.type === "user_signOut") {
    newState = {
      ...state,
      userName: null,
      isSignIn: false,
    };
  } else if (action.type === "jwt_signIn") {
    newState = {
      ...state,
      isSignIn: true,
    };
  } else {
    newState = state;
  }
  console.log("newState : ", newState);

  return newState;
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
