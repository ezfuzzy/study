import React, { useReducer } from "react";
import MemoryVisualizer from "./MemoryVisualizer";
import ControlPanel from "./ControlPanel";

const initialState = {
  memory: [
    { id: 1, size: 50, status: "free", allocatedSize: 0 },
    { id: 2, size: 100, status: "free", allocatedSize: 0 },
    { id: 3, size: 200, status: "free", allocatedSize: 0 },
  ],
  selectedBlockId: null,
};

const memoryReducer = (state, action) => {
  switch (action.type) {
    case "SET_MODE":
      return { ...state, mode: action.mode };
    case "ALLOCATE":
      return {
        ...state,
        memory: allocateMemory(state.memory, action.size, state.mode),
      };
    case "ADD_MEMORY":
      return {
        ...state,
        memory: [...state.memory, { id: state.memory.length + 1, size: action.size, status: "free", allocatedSize: 0 }],
      };
    case "FREE":
      return {
        ...state,
        memory: state.memory.map((block) => {
          if (block.status === "allocated" && block.id === state.selectedBlockId) {
            return { ...block, status: "free", allocatedSize: 0 };
          }
          return block;
        }),
      };
    case "RESET":
      return {
        ...state,
        memory: state.memory.map((block) => ({ ...block, status: "free", allocatedSize: 0 })),
      };
    case "SELECT_BLOCK":
      return {
        ...state,
        selectedBlockId: action.id,
      };
    default:
      return state;
  }
};

const contiguousAllocate = (memory, size) => {
  let remainingSize = size;
  return memory.map((block) => {
    if (block.status === "free" && remainingSize > 0) {
      const allocatedSize = Math.min(block.size, remainingSize);
      remainingSize -= allocatedSize;
      return { ...block, status: "allocated", allocatedSize };
    }
    return block;
  });
};

const fragmentationAllocate = (memory, size) => {
  let remainingSize = size;
  return memory.map((block) => {
    if (remainingSize > 0) {
      const allocatedSize = Math.min(block.size, remainingSize);
      remainingSize -= allocatedSize;
      return { ...block, status: "allocated", allocatedSize };
    }
    return block;
  });
};

const nonContiguousAllocate = (memory, size) => {
  let remainingSize = size;
  return memory.map((block) => {
    if (block.status === "free" && remainingSize > 0) {
      const allocatedSize = Math.min(block.size, remainingSize);
      remainingSize -= allocatedSize;
      return { ...block, status: "allocated", allocatedSize };
    }
    return block;
  });
};

const buddySystemAllocate = (memory, size) => {
  const powerOf2 = Math.ceil(Math.log2(size));
  const requiredSize = Math.pow(2, powerOf2);

  for (let i = 0; i < memory.length; i++) {
    if (memory[i].status === "free" && memory[i].size >= requiredSize) {
      let currentSize = memory[i].size;
      while (currentSize > requiredSize) {
        currentSize /= 2;
      }
      return memory.map((block, index) =>
        index === i ? { ...block, status: "allocated", allocatedSize: currentSize } : block
      );
    }
  }
  return memory; // 할당 실패
};

const allocateMemory = (memory, size, mode) => {
  switch (mode) {
    case "contiguous":
      return contiguousAllocate(memory, size);
    case "fragmentation":
      return fragmentationAllocate(memory, size);
    case "non-contiguous":
      return nonContiguousAllocate(memory, size);
    case "buddy":
      return buddySystemAllocate(memory, size);
    default:
      return memory;
  }
};

const MemorySimulator = () => {
  const [state, dispatch] = useReducer(memoryReducer, initialState);

  const setMode = (mode) => {
    dispatch({ type: "SET_MODE", mode });
  };

  const allocateMemory = (size) => {
    dispatch({ type: "ALLOCATE", size: parseInt(size, 10) });
  };

  const addMemoryBlock = (size) => {
    dispatch({ type: "ADD_MEMORY", size: parseInt(size, 10) });
  };

  const freeMemory = () => {
    dispatch({ type: "FREE" });
  };

  const resetMemory = (id) => {
    dispatch({ type: "RESET", id });
  };

  const selectBlock = (id) => {
    dispatch({ type: "SELECT_BLOCK", id });
  };

  return (
    <div>
      <ControlPanel
        setMode={setMode}
        allocateMemory={allocateMemory}
        addMemoryBlock={addMemoryBlock}
        resetMemory={resetMemory}
        freeMemory={freeMemory}
        selectedBlockId={state.selectedBlockId}
      />
      <MemoryVisualizer memory={state.memory} onBlockClick={selectBlock} />
    </div>
  );
};

export default MemorySimulator;
