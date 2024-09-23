import { logRoles } from "@testing-library/react"
import axios from "axios"
import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"

const reg_userName = /^[a-z].{4,9}$/
const reg_password = /[\W]/
const reg_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

function UserForm(props) {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    password2: "",
    email: "",
  })
  const [isValid, setValid] = useState({
    userName: null,
    password: null,
    password2: null,
    email: null,
  })

  const [isDirty, setDirty] = useState({
    userName: null,
    password: null,
    password2: null,
    email: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setDirty({
      ...isDirty,
      [name]: true,
    })
    setFormData({
      ...formData,
      [name]: value,
    })
    console.log(formData)
    console.log(isValid)
    console.log(isDirty)

    validate(e.target.name, e.target.value)
  }

  const validate = (name, value) => {
    if (name === "userName") {
      axios
        .get(`/user/check_username/${value}`)
        .then((res) => {
          console.log(res.data)

          setValid({
            ...isValid,
            [name]: reg_userName.test(value) && res.data.caUse,
          })
        })
        .catch((error) => {
          console.log(error)
        })
    } else if (name === "password") {
      setValid({
        ...isValid,
        [name]: reg_password.test(value),
      })
    } else if (name === "password2") {
      setValid({
        ...isValid,
        [name]: formData.password === value,
      })
    } else if (name === "email") {
      setValid({
        ...isValid,
        [name]: reg_email.test(value),
      })
    }
  }

  return (
    <>
      <h1>Sign up</h1>
      <Form>
        <Form.Group controlId="id" className="mb-3">
          <Form.Label>userName</Form.Label>
          <Form.Control
            onChange={handleChange}
            isValid={isValid.userName}
            isInvalid={!isValid.userName && isDirty.userName}
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
            isValid={isValid.password}
            isInvalid={!isValid.password && isDirty.password}
            type="password"
            name="password"
            placeholder="type password..."
          />
          <div className="form-text">특수문자 1개이상 쓰세용</div>
          <Form.Control.Feedback type="invalid">사용할 수 없는 비밀번호 입니다.</Form.Control.Feedback>
          <Form.Group controlId="password2" className="mb-3">
            <Form.Label>비밀번호 확인</Form.Label>
            <Form.Control
              onChange={handleChange}
              isValid={isValid.password2}
              isInvalid={!isValid.password2 && isDirty.password2}
              type="password"
              name="password2"
              placeholder="type password..."
            />
          </Form.Group>
        </Form.Group>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>password</Form.Label>
          <Form.Control
            onChange={handleChange}
            isValid={isValid.email}
            isInvalid={!isValid.email && isDirty.email}
            type="email"
            name="email"
            placeholder="type email..."
          />
          <Form.Control.Feedback type="invalid">이메일 형식에 맞게 작성해주세요.</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!isValid.userName || !isValid.password || !isValid.password2 || !isValid.email}
          variant="primary">
          가입
        </Button>
      </Form>
    </>
  )
}

export default UserForm
