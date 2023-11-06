var express = require('express');
var router = express.Router();

/* GET home page. */
//Index Route, returns the HTML File with the form
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'public/views' });
});

module.exports = router;
