import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Member from "../pages/Member";
import MemberAddForm from "../pages/MemberAddForm";
import MemberUpdateForm from "../pages/MemberUpdateForm";
import Post from "../pages/Post";
import Gallery from "../pages/Gallery";
import GalleryForm from "../pages/GalleryForm";
import ProtectedRoute from "../components/ProtectedRoute";
import THome from "../pages/tripDuo/THome";
import GalleryDetail from "../pages/GalleryDetail";
import Cafe from "../pages/Cafe";

// route 정보를 배열에 저장
// :num -> const {num} = useParams() 로 얻어낼 수 있는데 이때 여기에 작성한 변수 명을 따라간다 
const routes = [
  { path: "/", element: <Home /> },
  { path: "/members", element: <Member /> },
  { path: "/members/new", element: <MemberAddForm /> },
  { path: "/members/:num/update", element: <MemberUpdateForm /> },
  { path: "/posts", element: <Post /> },
  { path: "/gallery", element: <Gallery /> },
  {
    path: "/gallery/new",
    element: (
      <ProtectedRoute>
        <GalleryForm />
      </ProtectedRoute>
    ),
  },
  { path: "/gallery/:num", element: <GalleryDetail /> },
  { path: "/cafe", element: <Cafe /> },
  // ### tripDuo ###
  { path: "/tripDuo", element: <THome /> },
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
