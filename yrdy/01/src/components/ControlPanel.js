import React, { useState } from "react";

const ControlPanel = ({ setMode, allocateMemory, addMemoryBlock, resetMemory, freeMemory, selectedBlockId }) => {
  const [size, setSize] = useState("");
  const [mode, setSelectedMode] = useState("contiguous");

  const handleModeChange = (e) => {
    const selectedMode = e.target.value;
    setSelectedMode(selectedMode);
    setMode(selectedMode);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">메모리 할당 제어판</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <label className="flex items-center space-x-2">
          <input type="radio" value="contiguous" checked={mode === "contiguous"} onChange={handleModeChange} className="form-radio" />
          <span>연속 할당</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" value="fragmentation" checked={mode === "fragmentation"} onChange={handleModeChange} className="form-radio" />
          <span>단편화</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" value="non-contiguous" checked={mode === "non-contiguous"} onChange={handleModeChange} className="form-radio" />
          <span>비연속 할당</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" value="buddy" checked={mode === "buddy"} onChange={handleModeChange} className="form-radio" />
          <span>버디 시스템</span>
        </label>
      </div>
      <div className="mb-4">
        <input
          type="number"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          placeholder="크기 (KB)"
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => allocateMemory(size)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">할당</button>
        <button onClick={() => addMemoryBlock(size)} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">메모리 추가</button>
        <button onClick={freeMemory} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">선택 블록 해제</button>
        <button onClick={resetMemory} className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">전체 초기화</button>
      </div>
      <div className="mt-4">
        <label className="block mb-2">선택된 블록 ID: {selectedBlockId || '없음'}</label>
      </div>
    </div>
  );
};

export default ControlPanel;