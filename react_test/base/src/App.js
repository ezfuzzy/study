import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useOutlet } from "react-router-dom";
import BsNavBar from "./components/BsNavBar";

function App() {
  const currentOutlet = useOutlet();

  return (
    <>
      <BsNavBar />
      <Container>
        <div>{currentOutlet}</div>
      </Container>
    </>
  );
}

export default App;
