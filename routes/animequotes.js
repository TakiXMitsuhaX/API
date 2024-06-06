const express = require('express');
const animeQuotes = require('animequotes');

const router = express.Router();

router.get('/', (req, res) => {
  const quote = animeQuotes.randomQuote();
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(quote, null, 2));
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const quote = animeQuotes.getQuote(id);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(quote, null, 2));
});

router.get('/anime/:anime', (req, res) => {
  const anime = req.params.anime.toLowerCase();
  const quotes = animeQuotes.getQuotesByAnime(anime);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(quotes, null, 2));
});

router.get('/character/:character', (req, res) => {
  const character = req.params.character.toLowerCase();
  const quotes = animeQuotes.getQuotesByCharacter(character);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ quotes }, null, 2));
});

router.get('/random/anime/:anime', (req, res) => {
  const anime = req.params.anime.toLowerCase();
  const quote = animeQuotes.getRandomQuoteByAnime(anime);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ quote }, null, 2));
});

router.get('/random/character/:character', (req, res) => {
  const character = req.params.character.toLowerCase();
  const quote = animeQuotes.getRandomQuoteByCharacter(character);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ quote }, null, 2));
});

module.exports = router;
