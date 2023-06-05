import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";

const app: express.Application = express();
const server = http.createServer(app);
const ioOptions = { path: "/stockData/" };
const io = new Server(server, ioOptions);

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static(path.join(__dirname, "..", "build", "static")));

app.get("/", (req: express.Request, res: express.Response) => {
  res.sendFile("index.html", { root: path.join(__dirname, "..", "build") });
});

server.listen(8080, () => {
  console.log("8080port run");
});

io.on("connection", (socket) => {
  socket.on("connect", () => {
    console.log("어 왔니");
  });

  socket.on("stockRequest", (data) => {
    let sendData = [
      { id: 1, title: "소켓데이터", value: "" },
      { id: 2, title: "데이터소켓", value: "" },
      { id: 3, title: "켓소데이터", value: "" },
      { id: 4, title: "터이데소켓", value: "" },
      { id: 5, title: "이터데켓소", value: "" },
    ];

    for(let i=0; i<sendData.length; i++) {
      sendData[i].value = (Math.random()*100000).toFixed(2).toString()
    }
    socket.emit("stockData", JSON.stringify(sendData));
  });

  socket.on("disconnet", () => {
    console.log("어 갔니");
  });
});
