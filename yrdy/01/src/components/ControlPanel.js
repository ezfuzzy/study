import React, { useState } from "react";

const ControlPanel = ({ allocateMemory, freeMemory, addMemoryBlock, resetMemory, setMode }) => {
  const [size, setSize] = useState("");
  const [mode, setSelectedMode] = useState("contiguous");
  const [selectedBlockId, setSelectedBlockId] = useState("");

  const handleModeChange = (e) => {
    const selectedMode = e.target.value;
    setSelectedMode(selectedMode);
    setMode(selectedMode);
  };

  const handleBlockClick = (blockId) => {
    setSelectedBlockId(blockId.toString());
  };

  return (
    <div className="control-panel">
      <div className="radio-group">
        <label className="radio-label">
          <input type="radio" value="contiguous" checked={mode === "contiguous"} onChange={handleModeChange} />
          <span>연속 할당</span>
        </label>
        <label className="radio-label">
          <input type="radio" value="fragmentation" checked={mode === "fragmentation"} onChange={handleModeChange} />
          <span>단편화</span>
        </label>
        <label className="radio-label">
          <input type="radio" value="non-contiguous" checked={mode === "non-contiguous"} onChange={handleModeChange} />
          <span>비연속 할당</span>
        </label>
        <label className="radio-label">
          <input type="radio" value="buddy" checked={mode === "buddy"} onChange={handleModeChange} />
          <span>버디 시스템</span>
        </label>
      </div>
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.value)}
        placeholder="Size (KB)"
        className="mb-4"
      />
      <div className="button-group">
        <button onClick={() => allocateMemory(size)}>Allocate</button>
        <button onClick={() => addMemoryBlock(size)}>Add Memory</button>
        <button onClick={() => freeMemory()}>Free</button>
        <button onClick={() => resetMemory(selectedBlockId)}>Reset</button>
      </div>
      <div className="mt-4">
        <label className="block mb-2">Selected Block ID:</label>
        <input type="text" value={selectedBlockId} readOnly className="border border-gray-300 p-2 w-full" />
      </div>
    </div>
  );
};

export default ControlPanel;
