import React from 'react';
import MemoryBlock from './MemoryBlock';

const MemoryVisualizer = ({ memory }) => {
  return (
    <div className="memory-visualizer">
      {memory.map(block => (
        <MemoryBlock key={block.id} {...block} />
      ))}
    </div>
  );
};

export default MemoryVisualizer;
