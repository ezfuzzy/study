import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import MainPage from './MainPage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 사용자 인증 상태 확인
    fetch('http://localhost:5000/auth/user', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          setUser(data.user);
        }
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={user ? <MainPage user={user} /> : <Navigate to="/signin" />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;