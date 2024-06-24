const http = require("http");
const express = require("express");
const csurf = require("csurf");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const socketIo = require("socket.io");

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cookieParser());

const csrfProtection = csurf({ cookie: true });

app.use(express.urlencoded({ extended: false }));
app.use(cors());
// app.use(router);

io.on("connection", (socket) => {
  console.log("새로운 유저가 접속했습니다.");
  socket.on("join", ({ name, room }, callback) => {});
  socket.on("disconnect", () => {
    console.log("유저가 나갔습니다.");
  });
});

// Routes
app.get("/form", csrfProtection, (req, res) => {
  // Send the form with CSRF token
  res.send(`
    <form action="/process" method="POST">
      <input type="text" name="_csrf" value="${req.csrfToken()}">
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/process", csrfProtection, (req, res) => {
  res.send("Form processed");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
