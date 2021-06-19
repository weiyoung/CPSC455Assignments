var express = require('express');
var router = express.Router();

const cards = [
  {
    name: "(Example) Pikachu",
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    desc: "It keeps its tail raised to monitor its surroundings. If you yank its tail, it will try to bite you."
  },
  {
    name: "(Example) Charizard",
    url: "https://cdn2.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/1200px-006Charizard.png",
    desc: "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally."
  }
]

// GET request
router.get('/', function (req, res, next) {
  res.send(cards);
});

// POST request
router.post('/', function (req, res, next) {
  const newCard = req.body;

  cards.push(newCard);

  res.send(newCard);
});

module.exports = router;
