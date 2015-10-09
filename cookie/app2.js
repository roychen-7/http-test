var express = require('express');
var http = require('http');
var path = require('path');
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var path = require('path');

// App init
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', function(req, res, next) {
  res.render('index');
});

http.createServer(app).listen(9001, '127.0.0.1', function(){
  console.log('Server listening on 127.0.0.1:9001');
});
