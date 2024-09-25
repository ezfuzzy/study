import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import { Button, Form } from "react-bootstrap"

const dropZoneStyle = {
  minHeight: "300px",
  border: "3px solid #cecece",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  flexWrap: "wrap",
  rowGap: "10px",
  columnGap: "10px",
}

const profileStyle = {
  width: "200px",
  height: "200px",
  border: "1px solid #cecece",
  borderRadius: "50%",
}

const profileStyleForSvg = {
  width: "200px",
  height: "200px",
  border: "1px solid #cecece",
  borderRadius: "50%",
  display: "none",
}

function UserUpdateForm(props) {
  const [userInfo, setUserInfo] = useState({})
  const [imageSrc, setImageSrc] = useState(null)
  let savedImageSrc
  const imageInput = useRef()
  const dropZone = useRef()
  const personSvg = useRef()

  useEffect(() => {
    axios
      .get(`/api/user`)
      .then((res) => {
        setUserInfo(res.data)

        if (res.data.profile) {
          setImageSrc(`/upload/images/${res.data.profile}`)
          savedImageSrc = `/upload/images/${res.data.profile}`
        } else {
          const svgString = new XMLSerializer().serializeToString(personSvg.current)
          const encodedData = btoa(svgString)
          const dataUrl = "data:image/svg+xml;base64," + encodedData
          setImageSrc(dataUrl)
          savedImageSrc = dataUrl
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleChange = (e) => {
    const file = e.target.files[0]
    if (file !== undefined) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (event) => {
        const data = event.target.result
        setImageSrc(data)
      }
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    const reg = /image/
    if (!reg.test(file.type)) {
      alert("only img file")
      return
    }

    if (file !== undefined) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (event) => {
        const data = event.target.result
        setImageSrc(data)
      }
    }

    imageInput.current.files = e.dataTransfer.files
  }

  const handleReset = () => {
    setImageSrc(savedImageSrc)
  }

  const handleSubmit = (e) => {
    const formData = new FormData(e.target)
    axios
      .patch("/user", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <h1>회원 정보 수정</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>사용자명</Form.Label>
          <Form.Control name="userName" defaultValue={userInfo.userName} readOnly />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>이메일</Form.Label>
          <Form.Control name="email" defaultValue={userInfo.email} />
        </Form.Group>
        <Form.Group>
          <Form.Label>프로필 이미지</Form.Label>
          <Form.Control
            ref={imageInput}
            onChange={handleChange}
            style={{ display: "none" }}
            type="file"
            name="image"
            accept="image/*"
          />
        </Form.Group>
        <div>
          <a
            href="about:blank"
            onClick={(e) => {
              e.preventDefault()
              imageInput.current.click()
            }}>
            <div style={dropZoneStyle} ref={dropZone} onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
              <img style={profileStyle} src={imageSrc} alt="프로필 이미지" />
            </div>
          </a>
        </div>
        <Button onClick={handleSubmit} type="submit" size="sm" variant="success" className="m-3">
          confirm
        </Button>
        <Button onClick={handleReset} type="reset" size="sm" variant="danger">
          reset
        </Button>
      </Form>
    </>
  )
}

export default UserUpdateForm
