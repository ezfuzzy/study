import axios from "axios";
import { decodeToken } from "jsontokens";
import React, { useRef, useState } from "react";

function THome(props) {
  const username = useRef();
  const password = useRef();

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });

    console.log(userData);
    
  };

  const handleLogin = () => {
    axios
      .post("/api/v1/auth/login", userData)
      .then((res) => {

        console.log(res.data);
        localStorage.tripDuo_token = res.data;
        const result = decodeToken(localStorage.tripDuo_token.substring(7));
        const username = result.payload.sub;
        axios.defaults.headers.common["Authorization"] = localStorage.tripDuo_token;
        console.log(username);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignup = () => {
    axios
      .post("/api/v1/auth/signup", userData)
      .then((res) => {
        
        console.log(res.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <input ref={username} name="username" type="text" onChange={handleChange} />
      <input ref={password} name="password" type="text" onChange={handleChange} />
      <button onClick={handleLogin}>login</button>
      <button onClick={handleSignup}>sign up</button>
    </div>
  );
}

export default THome;
