import React, { useState, useEffect } from "react";
import axios from "axios";
import { Plus, Minus, RefreshCw } from "lucide-react";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api";

const MemoryBlock = ({ processes, totalMemory, onProcessClick, selectedProcess }) => {
  const renderMemoryBlocks = () => {
    let blocks = [];
    let currentPosition = 0;

    for (let i = 0; i <= processes.length; i++) {
      if (i < processes.length) {
        const process = processes[i];

        if (process.start > currentPosition) {
          const freeSpace = process.start - currentPosition;
          blocks.push(
            <div
              key={`free-${currentPosition}`}
              style={{ height: `${(freeSpace / totalMemory) * 100}%` }}
              className="w-full bg-gray-400 relative">
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                빈 공간 ({freeSpace}MB)
              </div>
            </div>
          );
        }

        blocks.push(
          <div
            key={`process-${i}`}
            style={{ height: `${(process.size / totalMemory) * 100}%` }}
            className={`w-full ${process.color} relative cursor-pointer ${
              selectedProcess === i ? "border-4 border-black" : ""
            }`}
            onClick={() => onProcessClick(i)}>
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
              {process.name} ({process.size}MB)
            </div>
          </div>
        );

        currentPosition = process.start + process.size;
      } else {
        const remainingSpace = totalMemory - currentPosition;
        if (remainingSpace > 0) {
          blocks.push(
            <div
              key={`free-end`}
              style={{ height: `${(remainingSpace / totalMemory) * 100}%` }}
              className="w-full bg-gray-400 relative">
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                빈 공간 ({remainingSpace}MB)
              </div>
            </div>
          );
        }
      }
    }

    return blocks;
  };

  return (
    <div className="w-64 h-[calc(100vh-4rem)] bg-gray-200 rounded-lg overflow-hidden relative">
      {renderMemoryBlocks()}
    </div>
  );
};

const ControlPanel = ({ onAllocate, onDeallocate, onReset, totalMemory }) => {
  const [processName, setProcessName] = useState("");
  const [processSize, setProcessSize] = useState("");
  const [allocationType, setAllocationType] = useState("first-fit");

  const handleAllocate = () => {
    if (processName && processSize) {
      onAllocate(processName, parseInt(processSize, 10), allocationType);
      setProcessName("");
      setProcessSize("");
    }
  };

  return (
    <div className="w-64 p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">제어 패널</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">할당 방식</label>
          <select
            value={allocationType}
            onChange={(e) => setAllocationType(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option value="first-fit">First Fit</option>
            <option value="best-fit">Best Fit</option>
            <option value="worst-fit">Worst Fit</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Process 이름</label>
          <input
            type="text"
            value={processName}
            onChange={(e) => setProcessName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Process 크기 (MB)</label>
          <input
            type="number"
            value={processSize}
            onChange={(e) => setProcessSize(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <button
          onClick={handleAllocate}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Plus className="inline-block mr-2" size={16} />
          할당
        </button>
        <button
          onClick={onDeallocate}
          className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          <Minus className="inline-block mr-2" size={16} />
          해제
        </button>
        <button
          onClick={onReset}
          className="w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          <RefreshCw className="inline-block mr-2" size={16} />
          초기화
        </button>
      </div>
    </div>
  );
};

const ProcessInfo = ({ process, onNameChange }) => {
  const [editName, setEditName] = useState(process.name);

  useEffect(() => {
    setEditName(process.name);
  }, [process]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onNameChange(editName);
  };

  return (
    <div className="w-64 p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Process 정보</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Process 이름</label>
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Process 크기</label>
            <p className="mt-1">{process.size} MB</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">할당 시간</label>
            <p className="mt-1">{new Date(process.allocatedAt).toLocaleString()}</p>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            이름 수정
          </button>
        </div>
      </form>
    </div>
  );
};

const MemorySimulator = () => {
  const [totalMemory, setTotalMemory] = useState(1024);
  const [processes, setProcesses] = useState([]);
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [error, setError] = useState(null);

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
  ];

  useEffect(() => {
    fetchMemoryState();
  }, []);

  const fetchMemoryState = async () => {
    try {
      const response = await axios.get(`${API_URL}/memory`);
      setProcesses(
        response.data.processes.map((process, index) => ({
          ...process,
          color: colors[index % colors.length],
          allocatedAt: process.allocatedAt ? new Date(process.allocatedAt).toISOString() : new Date().toISOString(),
        }))
      );
      setTotalMemory(response.data.totalSize);
    } catch (error) {
      console.error("Failed to fetch memory state:", error);
      setError("메모리 상태를 가져오는데 실패했습니다.");
    }
  };

  const allocateMemory = async (name, size, type) => {
    try {
      const response = await axios.post(`${API_URL}/memory/allocate`, { name, size, type });
      const newProcesses = response.data.processes.map((process, index) => {
        const existingProcess = processes.find((t) => t.name === process.name && t.start === process.start);
        return {
          ...process,
          color: existingProcess ? existingProcess.color : colors[index % colors.length],
          allocatedAt: process.allocatedAt ? new Date(process.allocatedAt).toISOString() : new Date().toISOString(),
        };
      });
      setProcesses(newProcesses);
      setError(null);
    } catch (error) {
      console.error("Failed to allocate memory:", error);
      setError("메모리 할당에 실패했습니다.");
    }
  };

  const deallocateMemory = async () => {
    if (selectedProcess !== null) {
      try {
        const response = await axios.post(`${API_URL}/memory/deallocate/${selectedProcess}`);
        const newProcesses = response.data.processes.map((process) => {
          const existingProcess = processes.find((t) => t.name === process.name && t.start === process.start);
          return existingProcess
            ? { ...existingProcess }
            : {
                ...process,
                color: colors[processes.length % colors.length],
                allocatedAt: process.allocatedAt
                  ? new Date(process.allocatedAt).toISOString()
                  : new Date().toISOString(),
              };
        });
        setProcesses(newProcesses);
        setSelectedProcess(null);
        setError(null);
      } catch (error) {
        console.error("Failed to deallocate memory:", error);
        setError("메모리 해제에 실패했습니다.");
      }
    }
  };

  const resetMemory = async () => {
    try {
      const response = await axios.post(`${API_URL}/memory/reset`);
      setProcesses([]);
      setSelectedProcess(null);
      setError(null);
    } catch (error) {
      console.error("Failed to reset memory:", error);
      setError("메모리 초기화에 실패했습니다.");
    }
  };

  const handleProcessClick = (index) => {
    setSelectedProcess(index);
  };

  const handleNameChange = async (newName) => {
    if (selectedProcess !== null) {
      try {
        const response = await axios.post(`${API_URL}/memory/rename/${selectedProcess}`, { name: newName });
        const updatedProcesses = processes.map((process, index) =>
          index === selectedProcess ? { ...process, name: newName } : process
        );
        setProcesses(updatedProcesses);
        setError(null);
      } catch (error) {
        console.error("Failed to rename process:", error);
        setError("Process 이름 변경에 실패했습니다.");
      }
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/4 p-4">
        <ControlPanel
          onAllocate={allocateMemory}
          onDeallocate={deallocateMemory}
          onReset={resetMemory}
          totalMemory={totalMemory}
        />
        {error && <div className="mt-4 text-red-500">{error}</div>}
      </div>
      <div className="w-1/2 p-4 flex justify-center">
        <MemoryBlock
          processes={processes}
          totalMemory={totalMemory}
          onProcessClick={handleProcessClick}
          selectedProcess={selectedProcess}
        />
      </div>
      <div className="w-1/4 p-4">
        {selectedProcess !== null && (
          <ProcessInfo process={processes[selectedProcess]} onNameChange={handleNameChange} />
        )}
      </div>
    </div>
  );
};

export default MemorySimulator;
