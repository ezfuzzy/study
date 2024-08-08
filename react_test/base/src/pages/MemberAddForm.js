import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const MemberAddForm = () => {
  const [info, setInfo] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    axios
      .post("/api/members", info)
      .then((res) => {
        console.log(res.data);
        navigate("/members");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Container className="my-5">
        <h1 className="mb-4 text-center">Member Add Form</h1>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="p-4 shadow-sm">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="name">Name</Form.Label>
                  <Form.Control
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="addr">Address</Form.Label>
                  <Form.Control
                    id="addr"
                    type="text"
                    name="addr"
                    placeholder="Enter your address"
                    onChange={handleChange}
                  />
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <Button variant="success" onClick={handleSubmit}>
                    Add
                  </Button>
                  <Button variant="secondary" onClick={() => { navigate("/members") }}>
                    Cancel
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MemberAddForm;
