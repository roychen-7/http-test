var express = require('express');
var http = require('http');
var path = require('path');
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var session = require('express-session');

// App init
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: '123',
  key: 'cookie-test'
}));

app.get('/', function(req, res, next) {
  if (!req.session.username) {
    return res.redirect(302, '/login');
  }

  res.end('welcome ' + req.session.username);
});

app.get('/login', function(req, res) {
  if (req.session.username) {
    return res.redirect(302, '/');
  }

  res.render('login');
});

app.post('/login', function(req, res) {
  req.session.username = req.body.username;
  req.session.age = req.body.age;

  res.redirect(302, '/');
});

app.get('/info', function(req, res, next) {
  if (req.session.username) {
    res.json({
      username: req.session.username,
      age: req.session.age
    });
  } else {
    res.json({
      message: 'error'
    }); 
  }
});

http.createServer(app).listen(9000, '127.0.0.1', function(){
  console.log('App listening on 127.0.0.1:9000');
});

// App2 init
var app2 = express();

app2.set('views', path.join(__dirname, 'views'));
app2.set('view engine', 'ejs');

app2.get('/', function(req, res, next) {
  res.render('index');
});

http.createServer(app2).listen(9001, '127.0.0.1', function(){
  console.log('App2 listening on 127.0.0.1:9001');
});
