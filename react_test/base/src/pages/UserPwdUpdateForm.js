import axios from "axios"
import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const reg_password = /[\W]/

function UserPwdUpdateForm(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    password: "",
    newPassword: "",
    newPassword2: "",
  })

  const [isValid, setValid] = useState({
    password: false,
    newPassword: false,
    newPassword2: false,
  })

  const [isDirty, setDirty] = useState({
    password: false,
    newPassword: false,
    newPassword2: false,
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

    validate(name, value)
  }

  const validate = (name, value) => {
    if (name === "password") {
      axios
        .get(`/api/user/check_password/${value}`)
        .then((res) => {
          setValid({
            ...isValid,
            [name]: res.data,
          })
        })
        .catch((error) => {
          console.log(error)
        })
    } else if (name === "newPassword") {
      setValid({
        ...isValid,
        [name]: reg_password.test(value),
      })
    } else if (name === "newPassword2") {
      setValid({
        ...isValid,
        [name]: formData.newPassword === value,
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .patch("/api/user/password", formData)
      .then((res) => {
        console.log(res.data)

        localStorage.removeItem("token") // 로그아웃
        navigate("/")
        const payload = {
          show: true,
          message: "비밀번호가 변경되었습니다. 다시 로그인 해주세요",
        }
        dispatch({ type: "LOGIN_MODAL", payload })

      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <h1>비밀번호 수정</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>기존 비밀번호</Form.Label>
          <Form.Control
            isValid={isValid.password}
            isInvalid={!isValid.password && isDirty.password}
            onBlur={handleChange}
            type="password"
            name="password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>새 비밀번호</Form.Label>
          <Form.Control
            isValid={isValid.newPassword}
            isInvalid={!isValid.newPassword && isDirty.newPassword}
            onChange={handleChange}
            type="password"
            name="newPassword"
          />
          <div className="form-text">1개 이상의 특수문자를 포함해야합니다</div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>새 비밀번호 확인</Form.Label>
          <Form.Control
            isValid={isValid.newPassword2}
            isInvalid={!isValid.newPassword2 && isDirty.newPassword2}
            onChange={handleChange}
            type="password"
            name="newPassword2"
          />
        </Form.Group>
        <Button type="submit" disabled={!isValid.password || !isValid.newPassword || !isValid.newPassword2} variant="success">
          변경
        </Button>
      </Form>
    </>
  )
}

export default UserPwdUpdateForm
