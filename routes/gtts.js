const express = require('express');
const gtts = require('gtts');

const router = express.Router();

router.get('/', (req, res) => {
  const text = req.query.text;
  const lang = req.query.lang || 'en';

  const speechStream = new gtts(text, lang).stream();
  res.setHeader('Content-Type', 'audio/mp3');
  speechStream.pipe(res);
});

module.exports = router;
