import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import CourseForm from "../pages/CourseForm";
import Home from "../pages/Home";
import Course from "../pages/Course";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/post/course", element: <Course /> },
  { path: "/post/course/new", element: <CourseForm /> },
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
