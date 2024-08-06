import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Button, Container, FloatingLabel, Form, Modal } from "react-bootstrap";
import axios from "axios";
import Navbar from "./components/Navbar";
import Fortune from "./components/Fortune";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function LoginModal(props) {
  const dispatch = useDispatch();
  const [signInInfo, setSignInInfo] = useState({});
  const [isError, setError] = useState(false);

  const handleChange = (event) => {
    setSignInInfo({
      ...signInInfo,
      [event.target.name]: event.target.value,
    });
  };

  const signIn = () => {
    axios
      .post("/api/auth", signInInfo)
      .then((res) => {
        dispatch({ type: "user_signIn", payload: signInInfo.userName });
        localStorage.token = res.data;
        setError(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">로그인이 필요 합니다.</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FloatingLabel controlId="floatingInput" label="User Name" className="mb-3">
          <Form.Control name="userName" type="text" placeholder="User Name" onChange={handleChange} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
          <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange} />
        </FloatingLabel>
        {isError && <Alert variant="danger">wrong username or password</Alert>}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={signIn}>로그인</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const isSignIn = useSelector((state) => state.isSignIn);
  const [nameList, setNameList] = useState([]);

  const handleClick = () => {
    axios
      .get("/api/names")
      .then((res) => {
        setNameList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      {/* use redux sample */}
      <Navbar />
      <h1>인덱스 페이지 입니다</h1>
      <Fortune />
      {/* use jwt */}
      <LoginModal show={!isSignIn} />
      <Button variant="primary" onClick={handleClick}>
        request
      </Button>
      <ul>
        {nameList.map((cur) => (
          <li key={cur}>{cur}</li>
        ))}
      </ul>
    </Container>
  );
}

export default App;
