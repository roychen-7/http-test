var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var headers={
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Expires': 0,
    'Set-Cookie': ['fromCookie=avdmg'],
    'Location': '/again'
  };
  res.writeHead(302, headers);
  res.end();
});

router.get('/again', function(req, res, next) {
  if (req.cookies.fromCookie === undefined) {
    res.write('No cookie'); 
    res.end();
    return;
  }
  
  // Do sth
  res.render('index', { title: 'Express' });
});

module.exports = router;
