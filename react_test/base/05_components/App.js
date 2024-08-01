// App.css 적용하기 (내부 css)
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Alert, Button, Card, Col, Container, Image, Modal, Pagination, Row } from "react-bootstrap";
import "holderjs";

//함수형 component
function App() {
  const [showModal, setShowModal] = useState(false);

  const color = "success";
  const card1 = { title: "title1", content: "content1" };
  const card2 = { title: "title2", content: "content2" };
  const card3 = { title: "title3", content: "content3" };
  const card4 = { title: "title4", content: "content4" };

  const handleGo = () => {
    console.log("moving");
  };

  const pageNums = Array.from({ length: 10 }, (_, i) => i + 11);
  const currentPage = 15;
  const getPage = (pageNum) => {
    console.log(pageNum + " page로 이동");
  };

  return (
    <Container>
      <h1>인덱스 페이지 입니다</h1>
      <Button
        variant="success"
        onClick={() => {
          setShowModal(true);
        }}>
        show modal
      </Button>
      <MyModal show={showModal} setShow={setShowModal} />
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

      <Alert variant="primary">primary-notice</Alert>
      <Alert variant={color}>success-notice</Alert>

      <img data-src="holder.js/100x100" alt="sample img" />
      <img data-src="holder.js/200x200?theme=lava" alt="sample img" />
      <Row>
        <Col>
          <img data-src="holder.js/200x200?theme=lava" alt="" />
        </Col>
        <Col>
          <img data-src="holder.js/200x200?theme=sky" alt="" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Image data-src="holder.js/200x200?theme=vine&outline=yes" alt="" />
        </Col>
        <Col>
          <Image data-src="holder.js/200x200?theme=sky" alt="" />
        </Col>
      </Row>
      {/* p -> n%  || xs, md .., -> n/12*/}
      <Row>
        <Col xs={6} md={4}>
          <Image data-src="holder.js/50px200?theme=vine&outline=yes" alt="" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image data-src="holder.js/50px200?theme=sky" alt="" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image data-src="holder.js/100px200?theme=sky" alt="" thumbnail />
        </Col>
      </Row>
      <h3>card components</h3>
      <Row>
        <Col md={6} lg={3}>
          <MyCard onGo={handleGo} title={card1.title} content={card1.title} />
        </Col>
        <Col md={6} lg={3}>
          <MyCard onGo={handleGo} title={card2.title} content={card2.title} />
        </Col>
        <Col md={6} lg={3}>
          <MyCard onGo={handleGo} title={card3.title} content={card3.title} />
        </Col>
        <Col md={6} lg={3}>
          <MyCard onGo={handleGo} title={card4.title} content={card4.title} />
        </Col>
      </Row>
      {/* pagination */}
      <Pagination>
        <Pagination.Prev />
        {pageNums.map((item) => (
          <Pagination.Item
            onClick={() => {
              getPage(item);
            }}
            key={item}
            active={item === currentPage}>
            {item}
          </Pagination.Item>
        ))}
        <Pagination.Next />
      </Pagination>

      {/* bottom */}
      <div style={{ margin: "1000px" }}></div>
    </Container>
  );
}

function AlertExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <>
        {["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((variant) => (
          <Alert variant={variant} onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            This is a {variant} alert—check it out!
          </Alert>
        ))}
      </>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

function MyCard(props) {
  return (
    <>
      <Card>
        <Image data-src="holder.js/200x200?theme=sky" alt="" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.content}</Card.Text>
          <Button onClick={props.onGo}>클릭</Button>
        </Card.Body>
      </Card>
    </>
  );
}

function MyModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={() => {
        console.log("close Modal");
        props.setShow(false);
      }}>
      <Modal.Header closeButton>
        <Modal.Title>modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>modal body modal body</Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            props.setShow(false);
          }}>
          close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

//외부에서 App.js 를 import 하면 App 함수를 사용할수 있다. (src/index.js)
export default App;
