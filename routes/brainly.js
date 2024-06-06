const express = require('express');
const { Brainly } = require('brainly-scraper-v2');

const router = express.Router();
Brainly.initialize();

router.get('/search', async (req, res) => {
  const { q, lang, countryCode } = req.query;
  const brain = new Brainly(countryCode || 'ph');

  try {
    const results = await brain.searchWithMT(q, lang);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({results: content, results: answers}));
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;

