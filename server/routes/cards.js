var express = require('express');
var router = express.Router();

let cards = [
  {
    id: Date.now().toString().substring(4, 12),
    name: "(Eg.) Pikachu",
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    desc: "It keeps its tail raised to monitor its surroundings. If you yank its tail, it will try to bite you."
  }
];

// GET all cards
router.get('/', function (req, res) {
  res.send(cards);
});

// POST one card
router.post('/', function (req, res) {
  cards.push(req.body);
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
