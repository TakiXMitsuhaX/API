const express = require('express');
const yts = require('yt-search');

const router = express.Router();

// search endpoint
router.get('/search', async (req, res) => {
  const query = req.query.search;

  if (!query) {
    return res.status(400).json({ error: 'Missing query parameter "q".' });
  }

  try {
    
    const { videos, playlists, channels, live } = await yts(query);

  
    const results = [...videos, ...playlists, ...channels, ...live];

    res.setHeader('Content-Type', 'application/json');
res.send(JSON.stringify(results, null, 2));
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


router.get('/video', async (req, res) => {
  const videoId = req.query.id;

  if (!videoId) {
    return res.status(400).json({ error: 'Missing query parameter "id".' });
  }

  try {
    
    const video = await yts({ videoId });

    res.json(video);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


router.get('/playlist', async (req, res) => {
  const listId = req.query.id;

  if (!listId) {
    return res.status(400).json({ error: 'Missing query parameter "id".' });
  }

  try {
    const playlist = await yts({ listId });

    res.json(playlist);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


module.exports = router;