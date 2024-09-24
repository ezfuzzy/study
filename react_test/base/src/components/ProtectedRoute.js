import { Outlet, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const ProtectedRoute = ({ children }) => {
  // -> <ProtectedRoute>  요기 있는 컴포넌트가 children으로 들어온다.   </ProtectedRoute>
  // 로그인 여부 - redux store 조회
  const isLogin = useSelector((state) => state.userName) ? true : false
  const location = useLocation() // 현재 위치
  const dispatch = useDispatch() // action 발행

  useEffect(() => {
    if (!isLogin) {
      const redirectUrl = location.pathname + location.search
      const payload = {
        show: true,
        message: "해당 페이지는 로그인이 필요 합니다!",
        url: redirectUrl,
      }
      dispatch({ type: "LOGIN_MODAL", payload })
    }
  }, [isLogin, location, dispatch])

  if (!isLogin) {
    return null // null -> 빈페이지 return
    // 또는 특정 경로로 리다이렉트
    // return <Navigate to="/" />;
  }
  return children || <Outlet />
}

export default ProtectedRoute
