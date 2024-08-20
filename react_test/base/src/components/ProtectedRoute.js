import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  // -> <ProtectedRoute>  요기 있는 컴포넌트가 children으로 들어온다.   </ProtectedRoute>
  // 로그인 여부 - redux store 조회
  const isLogin = useSelector((state) => state.userName) ? true : false;
  const location = useLocation(); // 현재 위치
  const dispatch = useDispatch(); // action 발행

  // 만약 로그인 상태가 아니면 개입. 
  if (!isLogin) {
    // 원래 가려던 목적지 + 검색 파라미터 정보를 가져옴
    const redirectUrl = location.pathname + location.search;
    const payload = {
      show: true,
      message: "해당 페이지는 로그인이 필요 합니다!",
      url: redirectUrl,
    };
    dispatch({ type: "LOGIN_MODAL", payload });

    return null; // -> null을 리턴하기에 랜더링되지 않음(빈 페이지)

    /**
     * 특정 경로로 리다이렉트 시키고 싶으면 요렇게 하면됨 
     */
    //return <Navigate to="/" />; //TODO: 이거 가져다 쓰기 
  }

  return children;
};

export default ProtectedRoute;
