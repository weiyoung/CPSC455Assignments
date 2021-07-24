const express = require('express')
const router = express.Router()

// GET index
router.get('/', function(req, res) {
  res.render('index', { title: 'My Trading Cards' })
})

module.exports = router
