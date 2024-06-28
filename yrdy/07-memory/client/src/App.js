import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MemorySimulator from "./MemorySimulator";

const Home = () => (
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <Link
      to="/memory-simulator"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      메모리 시뮬레이터 시작
    </Link>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memory-simulator" element={<MemorySimulator />} />
      </Routes>
    </Router>
  );
};

export default App;