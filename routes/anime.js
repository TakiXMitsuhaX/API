const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res)  => {
   const query = req.query.name;
  const apiUrl = 
    `https://api.jikan.moe/v4/anime?q=${query}&nsfw`;
  try {
    const response = await axios.get(apiUrl);
      res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});



router.get('/id', async (req, res) => {
  const { id } = req.query;
  const apiUrl = `https://api.jikan.moe/v4/anime/${id}/full`;

  try {
    const response = await axios.get(apiUrl);
    res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
