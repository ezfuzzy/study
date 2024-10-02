import { createBrowserRouter } from "react-router-dom"
import ProtectedRoute from "../components/ProtectedRoute" // 인증 여부를 체크하는 컴포넌트
import App from "../App"
import Home from "../pages/Home"
import Member from "../pages/Member"
import MemberAddForm from "../pages/MemberAddForm"
import MemberUpdateForm from "../pages/MemberUpdateForm"
import Post from "../pages/Post"
import Gallery from "../pages/Gallery"
import GalleryForm from "../pages/GalleryForm"
import THome from "../pages/tripDuo/THome"
import GalleryDetail from "../pages/GalleryDetail"
import Cafe from "../pages/Cafe"
import CafeForm from "../pages/CafeForm"
import DashBoard from "../pages/admin/DashBoard"
import Users from "../pages/admin/Users"
import CafeDetail from "../pages/CafeDetail"
import CafeUpdateForm from "../pages/CafeUpdateForm"
import UserForm from "../pages/UserForm"
import UserDetail from "../pages/UserDetail"
import UserUpdateForm from "../pages/UserUpdateForm"
import UserPwdUpdateForm from "../pages/UserPwdUpdateForm"

// 로그인이 필요한 경로들을 묶어서 처리
const protectedRoutes = [
  { path: "/gallery/new", element: <GalleryForm /> },
  { path: "/cafe/new", element: <CafeForm /> },
  { path: "/cafe/:num/update", element: <CafeUpdateForm /> },
  { path: "/admin", element: <DashBoard /> },
  { path: "/admin/users", element: <Users /> },
  { path: "/user/detail", element: <UserDetail /> },
  { path: "/user/edit", element: <UserUpdateForm /> },
  { path: "/user/password/edit", element: <UserPwdUpdateForm /> },
]

const routes = [
  { path: "/", element: <Home /> },
  { path: "/index.html", element: <Home /> },
  { path: "/members", element: <Member /> },
  { path: "/members/new", element: <MemberAddForm /> },
  { path: "/members/:num/update", element: <MemberUpdateForm /> },
  { path: "/posts", element: <Post /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/gallery/:num", element: <GalleryDetail /> },
  { path: "/cafe", element: <Cafe /> },
  { path: "/cafe/:num", element: <CafeDetail /> },
  { path: "/user/new", element: <UserForm /> },

  // ### tripDuo ###
  { path: "/tripDuo", element: <THome /> },
]

// create BrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      ...routes.map((route) => ({
        index: route.path === "/",
        path: route.path === "/" ? undefined : route.path,
        element: route.element,
      })),
      // Protected routes
      {
        element: <ProtectedRoute />, // 로그인을 요구하는 모든 경로를 ProtectedRoute로 감싸기
        children: protectedRoutes.map((route) => ({
          path: route.path,
          element: route.element,
        })),
      },
    ],
  },
])

export default router
