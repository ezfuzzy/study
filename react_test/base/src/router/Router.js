import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Member from "../pages/Member";
import MemberAddForm from "../pages/MemberAddForm";
import MemberUpdateForm from "../pages/MemberUpdateForm";

// route 정보를 배열에 저장
const routes = [
  { path: "/", element: <Home /> },
  { path: "/members", element: <Member /> },
  { path: "/members/new", element: <MemberAddForm /> },
  { path: "/members/:num/update", element: <MemberUpdateForm /> },
];

// create BrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes.map((route) => {
      return {
        index: route.path === "/", // 자식의 path가 "/"먄 index 페이지
        path: route.path === "/" ? undefined : route.path, // path에 "/" 2개 표시 방지
        element: route.element, // 어떤 컴포넌트를 활성화할 것인지
      };
    }),
  },
]);

export default router;
