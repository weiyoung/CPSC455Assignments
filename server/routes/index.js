var express = require('express');
var router = express.Router();

// GET index
router.get('/', function(req, res) {
  res.render('index', { title: 'My Trading Cards' });
});

module.exports = router;
