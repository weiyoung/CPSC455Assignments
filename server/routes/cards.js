const express = require('express')
const { CardModel } = require('../models/card.model')
const router = express.Router()

// GET one card
router.get('/:id', function (req, res) {
  CardModel.findById(req.params.id)
    .then(card => res.send(card))
    .catch(err => console.error(err))
})

// GET all cards
router.get('/', function (req, res) {
  CardModel.find()
    .then(cards => res.send(cards))
    .catch(err => console.error(err))
})

// POST one card
router.post('/', function (req, res) {
  const newCard = new CardModel(req.body)
  newCard.save()
    .then(() => {
      CardModel.find().then(cards => res.send(cards))
    })
    .catch(err => console.error(err))
})

// PATCH one card
router.patch('/:id', function (req, res) {
  CardModel.findByIdAndUpdate(req.params.id, { desc: req.body.desc })
    .then(() => {
      CardModel.find().then(cards => res.send(cards))
    })
    .catch(err => console.error(err))
})

// DELETE one card
router.delete('/:id', function (req, res) {
  CardModel.findByIdAndDelete(req.params.id)
    .then(() => {
      CardModel.find().then(cards => res.send(cards))
    })
    .catch(err => console.error(err))
})

// DELETE all cards
router.delete('/', function (req, res) {
  CardModel.deleteMany({})
    .then(() => {
      CardModel.find().then(cards => res.send(cards))
    })
    .catch(err => console.error(err))
})

module.exports = router
