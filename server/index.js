const express = require("express");
const app = express();


app.use("/", (reqq, res) => {
    res.send("server is running.");
});

app.listen(3000, console.log("port: 3000"));