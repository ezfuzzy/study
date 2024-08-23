import axios from "axios";
import { decodeToken } from "jsontokens";
import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";

function THome(props) {
  const inputPhoneNum = useRef();
  const inputVerificationCode = useRef();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
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
  };

  const handle인증번호받기 = () => {
    const phoneNumber = inputPhoneNum.current.value;

    axios
      .post("/api/v1/auth/sms", phoneNumber)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handle인증번호확인 = () => {
    const phoneNum = inputPhoneNum.current.value;
    const code = inputVerificationCode.current.value;
    console.log(code);

    axios
      .post("/api/v1/auth/sms/verify", phoneNum.substring(0, phoneNum.length) + code)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handle인증번호받기2 = () => {
    const phoneNumber = inputPhoneNum.current.value;

    console.log(typeof phoneNumber);
    console.log(phoneNumber);

    axios
      .post("/api/v1/auth/send", phoneNumber)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handle인증번호확인2 = () => {
    const phoneNum = inputPhoneNum.current.value;
    const code = inputVerificationCode.current.value;
    console.log(code);

    axios
      .post("/api/v1/auth/verify", phoneNum + code)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Form.Control className="my-2" onChange={handleChange} name="username" type="text" placeholder="username..." />
      <Form.Control className="my-2" onChange={handleChange} name="password" type="text" placeholder="password..." />
      <Button className="mx-2" onClick={handleLogin} variant="success">
        login
      </Button>
      <Button className="mx-2" onClick={handleSignup}>
        sign up
      </Button>
      <div className="d-flex my-2">
        <Form.Control
          ref={inputPhoneNum}
          name="phoneNum"
          type="number"
          placeholder="phone num"
          className="my-2"
          style={{ flex: 0.3, marginRight: "10px" }}
        />
        <Button className="m-2" onClick={handle인증번호받기}>
          인증번호 생성
        </Button>
        <Form.Control
          ref={inputVerificationCode}
          name="verificationCode"
          type="number"
          className="my-2"
          style={{ flex: 0.3, marginRight: "10px" }}
        />
        <Button className="m-2" onClick={handle인증번호확인}>
          인증번호 확인
        </Button>
      </div>
      {/* ### real test ###  */}
      <div className="d-flex my-2">
        <Form.Control
          ref={inputPhoneNum}
          name="phoneNum"
          type="number"
          placeholder="phone num"
          className="my-2"
          style={{ flex: 0.3, marginRight: "10px" }}
        />
        <Button className="m-2" onClick={handle인증번호받기2}>
          handle인증번호받기2
        </Button>
        <Form.Control
          ref={inputVerificationCode}
          name="verificationCode"
          type="text"
          className="my-2"
          style={{ flex: 0.3, marginRight: "10px" }}
        />
        <Button className="m-2" onClick={handle인증번호확인2}>
          handle인증번호확인2
        </Button>
      </div>
    </>
  );
}

export default THome;
