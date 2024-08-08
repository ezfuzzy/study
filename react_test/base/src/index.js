import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import router from "./router/Router";
import { RouterProvider } from "react-router-dom";
import axios from "axios";
import { decodeToken } from "jsontokens";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

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
    axios.defaults.headers.common["Authorization"] = localStorage.token;
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
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
