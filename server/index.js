const express = require("express");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);



app.use("/", (reqq, res) => {
    res.send("server is running.");
});

io.on('connection', function (socket) {
    console.log('a user connected, user id: ' + socket.userId);
});

app.listen(3000, console.log("port: 3000"));