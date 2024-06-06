const express = require('express');
const lyricsFinder = require('lyrics-finder');

const router = express.Router();


router.get('/:title/:artist', async (req, res) => {
  const title = req.query.title;
  const artist = req.query.artist;

  try {
    const lyrics = await lyricsFinder(title, artist) || 'Not Found!';
    res.send(lyrics);
  } catch (error) {
    res.status(500).send('Error retrieving lyrics.');
  }
});

module.exports = router;