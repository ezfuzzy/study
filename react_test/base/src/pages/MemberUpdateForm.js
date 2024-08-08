import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const MemberUpdateForm = () => {
  const { num } = useParams();
  const navigate = useNavigate();
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios
      .get(`/api/members/${num}`)
      .then((res) => setInfo(res.data))
      .catch((error) => console.log(error));
  }, [num]);

  const handleChange = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    axios
      .put(`/api/members/${num}`, info)
      .then((res) => {
        console.log(num, "is updated");
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
                value={info.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="addr">Address</Form.Label>
              <Form.Control
                id="addr"
                type="text"
                name="addr"
                value={info.addr}
                onChange={handleChange}
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
                  <Button variant="success" onClick={handleSubmit}>
                    Update
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

export default MemberUpdateForm;
