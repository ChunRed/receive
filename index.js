var express = require('express');
var app = express();
var http = require('http').Server(app);
var engine = require('ejs-locals');

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('node_modules'));


app.get('/demo', function (req, res) {
    res.render('demo');
});



http.listen(3000, function () {
    console.log('listening on *:3000');
});