// App.css 적용하기 (내부 css)
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Alert, Button, Col, Row } from "react-bootstrap";

//함수형 component
function App() {
  return (
    <div className="container">
      <h1>인덱스 페이지 입니다</h1>
      <div className="row">
        <div className="col">col1</div>
        <div className="col">col2</div>
        <div className="col">col3</div>
        <div className="col">col4</div>
        <div className="col">col5</div>
      </div>
      <Row>
        <Col>col1</Col>
        <Col>col2</Col>
        <Col>col3</Col>
        <Col>col4</Col>
        <Col>col5</Col>
      </Row>
      <Button variant="primary" size="lg">
        btn
      </Button>
      <AlertExample />
    </div>
  );
}

function AlertExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}
//외부에서 App.js 를 import 하면 App 함수를 사용할수 있다. (src/index.js)
export default App;
