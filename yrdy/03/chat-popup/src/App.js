import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ChatPopup from "./ChatPopup";

function App() {
  const navigate = useNavigate();

  const openChat = () => {
    navigate("/chat");
  };

  const closeChat = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <h1>main page</h1>
      <div className="relative">
        <button onClick={openChat} className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg">
          Chat
        </button>
        <Routes>
          <Route path="/chat" element={<ChatPopup onClose={closeChat} />} />
          {/* 다른 라우트를 추가할 수 있습니다 */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
