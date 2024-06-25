import React from "react";

const MemoryBlock = ({ id, size, status, allocatedSize, onClick }) => {
  const getBackgroundColor = () => {
    switch (status) {
      case "free":
        return "bg-green-200";
      case "allocated":
        return "bg-red-200";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div
      className={`${getBackgroundColor()} border border-gray-300 rounded-md p-2 cursor-pointer transition-all duration-300 hover:shadow-md`}
      style={{ width: `${size * 2}px`, minWidth: "60px" }}
      onClick={() => onClick(id)}>
      <div className="text-xs font-semibold mb-1">ID: {id}</div>
      <div className="text-xs">크기: {size}KB</div>
      {status === "allocated" && (
        <div className="bg-red-500 h-1 mt-1" style={{ width: `${(allocatedSize / size) * 100}%` }}></div>
      )}
    </div>
  );
};

const MemoryVisualizer = ({ memory, onBlockClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">메모리 시각화</h2>
      <div className="flex flex-wrap gap-4">
        {memory.map((block) => (
          <MemoryBlock key={block.id} {...block} onClick={onBlockClick} />
        ))}
      </div>
    </div>
  );
};

export default MemoryVisualizer;
