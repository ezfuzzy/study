import React from "react";

const MemoryBlock = ({ id, size, status, allocatedSize, onClick }) => {
  const blockStyle = {
    width: `${size}px`,
    height: "50px",
    position: "relative",
    cursor: "pointer",
  };

  const allocatedStyle = {
    width: `${allocatedSize}px`,
    height: "100%",
    backgroundColor: "rgba(255, 0, 0, 0.5)",
    position: "absolute",
    left: 0,
    top: 0,
  };

  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <div className={`memory-block ${status}`} style={blockStyle} onClick={handleClick}>
      {/* {id}: {size}KB */}
      {size}KB
      {status === "allocated" && <div style={allocatedStyle} />}
    </div>
  );
};

export default MemoryBlock;
