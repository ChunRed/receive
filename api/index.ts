const express = require("express");
const app = express();

app.engine('html', require('ejs').renderFile);

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/demo", (req, res) => {
    res.render("demo.html");
})

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;