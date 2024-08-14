// src/components/LoadingScreen.js
import React from "react";
import logo from "./ezfuzzy02.png"; // ezfuzzy 이미지 파일 경로

const LoadingScreen = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <img src={logo} alt="ezfuzzy logo" className="h-32 mb-4" />
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-green-500"></div>
        <p className="text-xl font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
