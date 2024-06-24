import React, { useReducer } from "react";
import MemoryVisualizer from "./MemoryVisualizer";
import ControlPanel from "./ControlPanel.js";

const initialState = {
  memory: [
    { id: 1, size: 50, status: "free", allocatedSize: 0 },
    { id: 2, size: 100, status: "free", allocatedSize: 0 },
    { id: 3, size: 200, status: "free", allocatedSize: 0 },
  ],
  mode: "contiguous",
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
    case "FREE":
      return {
        ...state,
        memory: freeMemory(state.memory),
      };
    case "ADD_MEMORY":
      return {
        ...state,
        memory: [...state.memory, { id: state.memory.length + 1, size: action.size, status: "free", allocatedSize: 0 }],
      };
    case "RESET":
      return {
        ...state,
        memory: resetMemory(state.memory, action.blockId),
      };
    default:
      return state;
  }
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

const freeMemory = (memory) => {
  return memory.map((block) => {
    if (block.status === "allocated") {
      return { ...block, status: "free", allocatedSize: 0 };
    }
    return block;
  });
};

const resetMemory = (memory, blockId) => {
  return memory.map((block) => {
    if (block.id.toString() === blockId && block.status === "allocated") {
      return { ...block, status: "free", allocatedSize: 0 };
    }
    return block;
  });
};

const contiguousAllocate = (memory, size) => {
  let allocated = false;
  return memory.map((block) => {
    if (!allocated && block.status === "free" && block.size >= size) {
      allocated = true;
      return { ...block, status: "allocated", allocatedSize: size };
    }
    return block;
  });
};

const fragmentationAllocate = (memory, size) => {
  // 단편화 할당 로직
  return contiguousAllocate(memory, size);
};

const nonContiguousAllocate = (memory, size) => {
  // 비연속 할당 로직
  return contiguousAllocate(memory, size);
};

const buddySystemAllocate = (memory, size) => {
  // 버디 시스템 예시 로직
  return contiguousAllocate(memory, size);
};

const MemorySimulator = () => {
  const [state, dispatch] = useReducer(memoryReducer, initialState);

  const allocateMemory = (size) => {
    dispatch({ type: "ALLOCATE", size: parseInt(size, 10) });
  };

  const freeMemory = () => {
    dispatch({ type: "FREE" });
  };

  const addMemoryBlock = (size) => {
    dispatch({ type: "ADD_MEMORY", size: parseInt(size, 10) });
  };

  const resetMemory = (blockId) => {
    dispatch({ type: "RESET", blockId });
  };

  const setMode = (mode) => {
    dispatch({ type: "SET_MODE", mode });
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-2xl font-bold">Memory Allocation Simulator</h1>
      <ControlPanel
        allocateMemory={allocateMemory}
        freeMemory={freeMemory}
        addMemoryBlock={addMemoryBlock}
        resetMemory={resetMemory}
        setMode={setMode}
      />
      <MemoryVisualizer memory={state.memory} />
    </div>
  );
};

export default MemorySimulator;
