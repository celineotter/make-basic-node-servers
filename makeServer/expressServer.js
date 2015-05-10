var http = require("http");
var fs = require("fs");
var express = require("express");
var app = express();

var apiData = [1,2,3,4,5,6,7,8,9,0]


app.use(express.static(__dirname + '/public'));

app.get('/api/*', function (req, res) {
    res.json(apiData);
})

var server = http.createServer(app);
console.log("Listening on http://127.0.0.1:8080");
server.listen('8080', '127.0.0.1');
