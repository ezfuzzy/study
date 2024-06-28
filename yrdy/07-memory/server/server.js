const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let memory = {
  totalSize: 1024,
  processes: [
    { name: "a", size: 128, start: 0, allocatedAt: new Date().toISOString() },
    { name: "b", size: 64, start: 128, allocatedAt: new Date().toISOString() },
    { name: "c", size: 256, start: 192, allocatedAt: new Date().toISOString() },
    { name: "d", size: 64, start: 448, allocatedAt: new Date().toISOString() },
  ],
};

function findFreeSpace(size, type) {
  let freeSpaces = [];
  let start = 0;

  for (let i = 0; i <= memory.processes.length; i++) {
    const end = i < memory.processes.length ? memory.processes[i].start : memory.totalSize;
    const spaceSize = end - start;

    if (spaceSize >= size) {
      freeSpaces.push({ start, size: spaceSize });
    }

    if (i < memory.processes.length) {
      start = memory.processes[i].start + memory.processes[i].size;
    }
  }

  if (freeSpaces.length === 0) return null;

  if (type === "first-fit") {
    return freeSpaces[0];
  } else if (type === "best-fit") {
    return freeSpaces.reduce((best, current) => (current.size < best.size && current.size >= size ? current : best));
  } else if (type === "worst-fit") {
    return freeSpaces.reduce((worst, current) => (current.size > worst.size ? current : worst));
  }
}

app.get("/api/memory", (req, res) => {
  res.json(memory);
});

app.post("/api/memory/allocate", (req, res) => {
  const { name, size, type } = req.body;

  if (!name || !size || !type) {
    return res.status(400).json({ error: "잘못된 입력입니다." });
  }

  const freeSpace = findFreeSpace(size, type);

  if (freeSpace) {
    const newProcess = {
      name,
      size,
      start: freeSpace.start,
      allocatedAt: new Date().toISOString(),
    };

    memory.processes.push(newProcess);
    memory.processes.sort((a, b) => a.start - b.start);

    res.json(memory);
  } else {
    res.status(400).json({ error: "메모리 할당 실패: 충분한 공간이 없습니다." });
  }
});

app.post("/api/memory/deallocate/:index", (req, res) => {
  const index = parseInt(req.params.index);

  if (index >= 0 && index < memory.processes.length) {
    memory.processes.splice(index, 1);
    res.json(memory);
  } else {
    res.status(400).json({ error: "잘못된 process 인덱스" });
  }
});

app.post("/api/memory/rename/:index", (req, res) => {
  const index = parseInt(req.params.index);
  const { name } = req.body;

  if (index >= 0 && index < memory.processes.length && name) {
    memory.processes[index].name = name;
    res.json(memory);
  } else {
    res.status(400).json({ error: "잘못된 process 인덱스 또는 이름" });
  }
});

app.post("/api/memory/reset", (req, res) => {
  memory = {
    totalSize: 1024,
    processes: [],
  };
  res.json(memory);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
