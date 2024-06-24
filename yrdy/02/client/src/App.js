import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Chat from "./components/Chat";
import Join from "./components/join";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
