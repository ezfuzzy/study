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
        //로그인 성공이면 여기가 실행되면서 jwt 가 발급된다.
        console.log(res.data);
        //토큰을 localStorage 에 저장
        localStorage.token = res.data;
        //토큰을 디코딩해서 사용자 정보를 얻어온다
        const result = decodeToken(localStorage.token.substring(7));
        //토큰에 저장된 주제(subject) 얻어내기
        const username = result.payload.sub;
        //axios 의 header 에 인증정보를 기본으로 가지고 갈수 있도록 설정
        axios.defaults.headers.common["Authorization"] = localStorage.token;
        //로그인 이후에 원래 가려던 곳이 있으면 리다이렉팅 logic

        console.log(username);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input ref={username} name="username" type="text" onChange={handleChange} />
      <input ref={password} name="password" type="text" onChange={handleChange} />
      <button onClick={handleLogin}>login</button>
    </div>
  );
}

export default THome;
