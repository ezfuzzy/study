import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import MainPage from "./MainPage";
import "./index.css";

axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:5000/auth/user");
        console.log("Authenticated user:", res.data.user);
        setUser(res.data.user);
      } catch (error) {
        console.error("Authentication error:", error);
      } finally {
        setLoading(false); // 로딩 완료
      }
    };
    checkAuth();
  }, []);

  useEffect(() => {
    console.log("User state updated: ", user);
  }, [user]);

  if (loading) {
    return <div>Loading...</div>; // 로딩 중 표시할 내용
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={user ? <MainPage user={user} /> : <Navigate to="/signin" />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
