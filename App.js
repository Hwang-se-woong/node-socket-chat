const express = require("express");
const app = express();
const mysql = require("mysql");

const server = require("http").createServer(app);
const PORT = 8080;

server.listen(PORT, () => {
  console.log("서버 실행 :" + PORT);
});

// app.use("/public", express.static("./public"));
app.get("/", (req, res) => {
  안녕;
});

const socketio = require("socket.io");
const io = socketio.listen(server);
