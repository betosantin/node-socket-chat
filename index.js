const { Socket } = require("dgram");
var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

io.on("connection", (client) =>{
    client.on("disconnect", ()=>{
        console.log("Socket: " + client.id + " desconectou-se");
    });

    client.on("msg", (data) =>{
        io.emit("showmsg", data);
        console.log(data);
    });


});

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index");
});

http.listen(3000, ()=>{
    console.log("App on!");
})