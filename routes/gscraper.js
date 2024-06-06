const express = require('express');
const gplay = require('google-play-scraper');

const router = express.Router();

//appID route 
router.get('/', (req, res) => {
  const appId = req.query.appId;
  gplay.app({ appId })
    .then((data) => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data, null, 2));
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

// search route
router.get('/apps/search', async (req, res) => {
  const term = req.query.term;
  const num = req.query.num || 10; // Default to returning 10 results
  const results = await gplay.search({ term, num });
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(results, null, 2));
});

module.exports = router;
