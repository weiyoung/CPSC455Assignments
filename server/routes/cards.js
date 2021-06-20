var express = require('express');
var router = express.Router();

let cards = [
  {
    id: Date.now().toString().substring(4, 12),
    name: "Pikachu",
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    desc: "When Pikachu meet, they’ll touch their tails together and exchange electricity through them as a form of greeting."
  }
];

// GET one card
router.get('/:id', function (req, res) {
  const [card] = cards.filter(card => card.id === req.params.id);
  res.send(card);
});

// GET all cards
router.get('/', function (req, res) {
  res.send(cards);
});

// POST one card
router.post('/', function (req, res) {
  cards.push(req.body);
  res.send(cards);
});

// PATCH one card
router.patch('/:id', function (req, res) {
  const [card] = cards.filter(card => card.id === req.params.id);
  card.desc = req.body.desc;
  res.send(cards);
});

// DELETE one card
router.delete('/:id', function (req, res) {
  cards = cards.filter(card => card.id !== req.params.id);
  res.send(cards);
});

// DELETE all cards
router.delete('/', function (req, res) {
  cards = [];
  res.send(cards);
});

module.exports = router;
