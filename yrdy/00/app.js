const express = require("express");
const path = require("path");
const app = express();

app.use((req, res, next) => {
  const clientInfo = {
    ip: req.ip,
    userAgent: req.headers["user-agent"],
    referer: req.headers["referer"] || req.headers["referrer"],
    acceptLanguage: req.headers["accept-language"],
    cookies: req.headers["cookie"],
    host: req.headers["host"],
    connection: req.headers["connection"],
    accept: req.headers["accept"],
    contentType: req.headers["content-type"],
  };

  console.log(clientInfo); // 클라이언트 정보를 콘솔에 출력합니다.

  // 이 정보를 이용해 필요한 작업을 수행할 수 있습니다.
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, client!");
});

app.get("/signIn", (req, res) => {
  res.sendFile(path.join(__dirname + "/public", "signIn.html"));
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
