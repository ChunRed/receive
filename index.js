var express = require('express');
var app = express();
var http = require('http').Server(app);

app.engine('html', require('ejs').renderFile);
app.use(express.static('node_modules'));

app.set('views', "./views");


app.get('/demo', (req, res) => {
    res.render("demo.html");
});

app.get('/test',(req, res) => {
    res.json({
        message: "hello",
    });
    console.log("hello");
})




http.listen(3000, function () {
    console.log('listening on *:3000');
});