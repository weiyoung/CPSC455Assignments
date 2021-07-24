const express = require('express')
const { CardModel } = require('../models/card.model')
const router = express.Router()

// GET starred cards
router.get('/', function (req, res) {
  CardModel.find({star: {$eq: true}})
    .then(cards => res.send(cards))
    .catch(err => console.error(err))
})

module.exports = router
