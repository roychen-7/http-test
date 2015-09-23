var http = require('http');
var express = require('express');
var fs = require('fs');

var app = express();

app.get("/", function (req, res) {
    fs.readFile('./index.html', function(err, index) {
        if (err) {
            return res.end("ERROR");
        } 

        res.write(index);
        res.end();
    });
});

app.get("/a.css", function (req, res) {
    fs.readFile("./a.txt", function (err, buffer) {
        if (err) {
            return res.end("ERROR");
        } 

        res.write(buffer);
        res.end();
    }); 
});

http.createServer(app).listen(3000, function(){
    console.log('Express server listening on port 3000');
});
