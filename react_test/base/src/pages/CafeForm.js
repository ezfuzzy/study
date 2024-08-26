import React, { useEffect, useState } from "react";
import { Button, Form, FloatingLabel } from "react-bootstrap";
import { initEditor } from "../editor/SmartEditor";

function CafeForm(props) {
  const [editorTool, setEditorTool] = useState([]);

  useEffect(() => {
    // initEditor()를 호출하면서 textarea의 id를 전달하면
    // textarea가 smartEditor로 변경되면서 editor tool 객체가 리턴.
    setEditorTool(initEditor("content")); // init ~ 해야 초기화 됨
  }, []);

  return (
    <>
      <h1>new post form</h1>
      <Form>
        <FloatingLabel label="title" className="mb-3" controlId="title">
          <Form.Control type="text" placeholder="type title..." />
        </FloatingLabel>
        <Form.Group className="mb-3" controlId="content">
          <Form.Label>content</Form.Label>
          <Form.Control as="textarea" rows="20"/>
        </Form.Group>
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            editorTool.exec();
          }}>
          save
        </Button>
      </Form>
    </>
  );
}

export default CafeForm;
