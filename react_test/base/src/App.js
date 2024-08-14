import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useOutlet } from "react-router-dom";
import BsNavBar from "./components/BsNavBar";
import { useSelector } from "react-redux";
import LoginModal from "./components/LoginModal";

function App() {
  const currentOutlet = useOutlet();

  //로그인 모달과 관련된 값을 redux store 로 부터 읽어온다.
  const loginModal = useSelector((state) => state.loginModal);

  return (
    <>
      <BsNavBar />
      <Container>
        <div>{currentOutlet}</div>
      </Container>
      <LoginModal show={loginModal.show} message={loginModal.message} />
    </>
  );
}

export default App;
