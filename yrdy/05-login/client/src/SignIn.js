import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function SignIn(setUser) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password })
      });
      if (response.ok) {
        // setUser()
        navigate('/');
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error('Signin error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">로그인</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block">이메일</label>
              <input type="email" placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mt-4">
              <label className="block">비밀번호</label>
              <input type="password" placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">로그인</button>
              <Link to="/signup" className="text-sm text-blue-600 hover:underline">회원가입</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;