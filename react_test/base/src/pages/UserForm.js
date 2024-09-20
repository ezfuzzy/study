import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"

function UserForm(props) {
  const [isValid, setValid] = useState(null)
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    email: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    console.log(formData)
  }

  return (
    <>
      <h1>Sign up</h1>
      <Form>
        <Form.Group controlId="id" className="mb-3">
          <Form.Label>userName</Form.Label>
          <Form.Control
            onChange={handleChange}
            isInvalid={isValid}
            type="text"
            name="userName"
            placeholder="type id..."
          />
          <div className="form-text">영문자로 시작하고 5~10글자 이내</div>
          <Form.Control.Feedback type="invalid">사용할 수 없는 아이디 입니다.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password" className="mb-3">
          <Form.Label>password</Form.Label>
          <Form.Control
            onChange={handleChange}
            isInvalid={isValid}
            type="password"
            name="password"
            placeholder="type password..."
          />
          <div className="form-text">특수문자 1개이상 쓰세용</div>
          <Form.Control.Feedback type="invalid">사용할 수 없는 비밀번호 입니다.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>password</Form.Label>
          <Form.Control
            onChange={handleChange}
            isInvalid={isValid}
            type="email"
            name="email"
            placeholder="type email..."
          />
          <Form.Control.Feedback type="invalid">이메일 형식에 맞게 작성해주세요.</Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary">가입</Button>
      </Form>
    </>
  )
}

export default UserForm
