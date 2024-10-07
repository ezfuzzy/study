// src/components/BsNavBar.js

import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink, useNavigate } from "react-router-dom"
import AlertModal from "./AlertModal"
import { useEffect, useState } from "react"
import axios from "axios"
import { decodeToken } from "jsontokens"

function BsNavBar() {
  //로그인된 사용자명이 있는지 store 에서 읽어와 본다.
  const userName = useSelector((state) => state.userName)
  // action 을 dispatch 할수 있는 함수
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //"로그아웃 되었습니다" 모달을 띄울지 여부
  const [alertShow, setAlertShow] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const [remainTime, setRemainTime] = useState(0)

  useEffect(() => {
    const updateRemainTime = () => {
      if (localStorage.token) {
        const result = decodeToken(localStorage.token.substring(7))
        const expTime = result.payload.exp * 1000
        const now = new Date().getTime()
        setRemainTime(Math.floor((expTime - now) / 1000)) // 초 단위로 변환
      }
    }

    updateRemainTime() // 컴포넌트가 처음 렌더링될 때 즉시 호출

    const intervalId = setInterval(() => {
      setRemainTime((prevTime) => Math.max(prevTime - 1, 0))
    }, 1000)

    return () => clearInterval(intervalId)
  }, [localStorage.token])

  const handleLogout = () => {
    //localStorage 에서 token 을 삭제한다
    delete localStorage.token
    // userName 을 null 로 변경
    dispatch({ type: "UPDATE_USER", payload: null })
    //최상위 경로로 이동
    navigate("/")
    // 알림 모달 띄우기
    setAlertShow(true)
    // 메뉴 닫기
    setExpanded(false)
    delete axios.defaults.headers.common["Authorization"]
  }

  const handleYes = () => {
    //알림 모달 숨기기
    setAlertShow(false)
  }

  return (
    <>
      <AlertModal show={alertShow} message={"로그 아웃 되었습니다"} yes={handleYes} />
      <Navbar
        fixed="top"
        expand="md"
        className="bg-success mb-2"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}>
        <Container>
          <Navbar.Brand as={NavLink} to="/" onClick={() => setExpanded(false)}>
            Acorn
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="one" />
          <Navbar.Collapse id="one">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/tripDuo" onClick={() => setExpanded(false)}>
                TripDuo
              </Nav.Link>
              <Nav.Link as={NavLink} to="/members" onClick={() => setExpanded(false)}>
                Member
              </Nav.Link>
              <Nav.Link as={NavLink} to="/posts" onClick={() => setExpanded(false)}>
                Post
              </Nav.Link>
              <Nav.Link as={NavLink} to="/gallery" onClick={() => setExpanded(false)}>
                Gallery
              </Nav.Link>
              <Nav.Link as={NavLink} to="/cafe" onClick={() => setExpanded(false)}>
                Cafe
              </Nav.Link>
              <Nav.Link as={NavLink} to="/admin" onClick={() => setExpanded(false)}>
                Admin_DashBoard
              </Nav.Link>
            </Nav>
            {userName ? (
              <>
                {remainTime}
                <Nav>
                  <Nav.Link as={Link} to="/user/detail" onClick={() => setExpanded(false)}>
                    {userName}
                  </Nav.Link>
                  <span className="navbar-text mx-3">Signed in</span>
                </Nav>
                <Button size="sm" variant="info" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  size="sm"
                  variant="warning mx-3"
                  onClick={() => {
                    //로그인 모달을 띄우는 action 을 dispatch 한다
                    const action = {
                      type: "LOGIN_MODAL",
                      payload: {
                        show: true,
                        message: "로그인 폼 입니다",
                      },
                    }
                    dispatch(action)
                    setExpanded(false)
                  }}>
                  Sign in
                </Button>
                <Button
                  size="sm"
                  variant="outline-warning"
                  onClick={() => {
                    navigate("/user/new")
                    setExpanded(false)
                  }}>
                  Sign up
                </Button>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default BsNavBar
