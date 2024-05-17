const express = require("express");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const engine = require('ejs-locals');

app.engine('ejs', engine);
app.set('view engine', 'ejs');


app.set('views', "./views");

app.get('/', function (req, res) {
    res.send("server is running.")
});
app.get('/demo', function (req, res) {
    res.render('demo');
});

io.on('connection', function (socket) {
    console.log('a user connected, user id: ' + socket.userId);
});

console.log("socket start");

let PORT = 3000; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));