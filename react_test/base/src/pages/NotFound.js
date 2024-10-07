import React from "react"
import { Button } from "react-bootstrap"
import { Link, useLocation, useNavigate } from "react-router-dom"

function NotFound(props) {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <>
      <h1>404 NotFound</h1>
      <p>
        <strong>{location.pathname}</strong> 경로는 존재하지 않는 경로입니다
        <Button variant="primary" className="me-1" onClick={() => navigate(-1)}>
          뒤로가기
        </Button>
        <Button variant="success" as={Link} to="/">홈으로 가기</Button>
      </p>
    </>
  )
}

export default NotFound
