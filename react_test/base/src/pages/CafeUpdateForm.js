import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { initEditor } from "../editor/SmartEditor";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";

function CafeUpdateForm(props) {
  const { num } = useParams();
  const [editorTool, setEditorTool] = useState([]);
  const navigate = useNavigate();

  const inputTitle = useRef();
  const inputContent = useRef();

  const [savedData, setSavedData] = useState({});

  useEffect(() => {
    axios
      .get(`/api/cafes/${num}/update`)
      .then((res) => {
        console.log(res.data);
        setSavedData(res.data);

        inputTitle.current.value = res.data.title;
        inputContent.current.value = res.data.content;
      })
      .catch((error) => console.log(error));

    setEditorTool(initEditor("content")); // init ~ 해야 초기화 됨
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    editorTool.exec();

    const title = inputTitle.current.value;
    const content = inputContent.current.value;

    axios
      .put(`/api/cafes/${num}`, { title, content })
      .then((res) => {
        console.log(res.data);
        navigate(`/cafe/${num}`);
      })
      .catch((error) => console.log(error));
  };

  const handleCancel = () => {
    inputTitle.current.value = savedData.title;
    inputContent.current.value = savedData.content;
    setEditorTool(initEditor("content"));
  };

  return (
    <>
      <h1>new post form</h1>
      <Form>
        <FloatingLabel label="title" className="mb-3" controlId="title">
          <Form.Control ref={inputTitle} type="text" placeholder="type title..." />
        </FloatingLabel>
        <Form.Group className="mb-3" controlId="content">
          <Form.Label>content</Form.Label>
          <Form.Control ref={inputContent} as="textarea" style={{ height: "300px" }} />
        </Form.Group>
        <div className="flex justify-between">
          <Button type="success" onClick={handleSubmit}>
            save
          </Button>
          <Button onClick={handleCancel} variant="danger">
            cancel
          </Button>
        </div>
      </Form>
    </>
  );
}

export default CafeUpdateForm;
