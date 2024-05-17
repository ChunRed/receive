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

console.log("socket start");

let PORT = 3000; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));