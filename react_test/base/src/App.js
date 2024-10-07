import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { useNavigate, useOutlet } from "react-router-dom"
import BsNavBar from "./components/BsNavBar"
import { useDispatch, useSelector } from "react-redux"
import LoginModal from "./components/LoginModal"
import { useEffect, useState } from "react"
import { decodeToken } from "jsontokens"
import axios from "axios"
import AlertModal from "./components/AlertModal"

function App() {
  const currentOutlet = useOutlet()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //로그인 모달과 관련된 값을 redux store 로 부터 읽어온다.
  const loginModal = useSelector((state) => state.loginModal)
  const userName = useSelector((state) => state.userName)

  const [alertShow, setAlertShow] = useState(false)

  const [timeoutId, settimeoutId] = useState({
    id1: null,
    id2: null,
  })

  useEffect(() => {
    // 초기화
    if (timeoutId) {
      console.log("초기화")
      clearTimeout(timeoutId.id1)
      clearTimeout(timeoutId.id2)
      settimeoutId({
        id1: null,
        id2: null,
      })
    }

    if (localStorage.token) {
      const result = decodeToken(localStorage.token.substring(7))
      const expTime = result.payload.exp * 1000
      const now = new Date().getTime()

      if (expTime > now) {
        const remainTime = expTime - now

        settimeoutId({
          ...timeoutId,
          id1: setTimeout(() => {
            setAlertShow(true)
          }, remainTime - 5 * 60 * 1000),
        })

        settimeoutId({
          ...timeoutId,
          id2: setTimeout(() => {
            delete localStorage.token
            delete axios.defaults.headers.common["Authorization"]
            navigate("/", { replace: true })
          }, remainTime),
        })
      }
    }
  }, [navigate, userName])

  return (
    <>
      <AlertModal
        show={alertShow}
        message={"5분뒤 로그아웃됩니다. 다시 로그인해주세요"}
        yes={() => {
          setAlertShow(false)
        }}
      />
      <BsNavBar />
      <Container>
        <div>{currentOutlet}</div>
      </Container>
      {loginModal.show && (
        <LoginModal
          show={loginModal.show}
          message={loginModal.message}
          url={loginModal.url}
          onHide={() => {
            dispatch({ type: "LOGIN_MODAL", payload: { show: false } })
          }}
        />
      )}
    </>
  )
}

export default App
