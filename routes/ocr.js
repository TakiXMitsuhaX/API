/*const express = require('express');
const Tesseract = require('tesseract.js');

const router = express.Router();
router.use(express.json());

router.post('/extract-text', async (req, res) => {
  const { imageUrl, language } = req.body;

  try {
    const result = await Tesseract.recognize(imageUrl, language);
    const extractedText = result.data.text.trim();
    res.json({ text: extractedText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while extracting text from image.' });
  }
});

module.exports = router;*/
const express = require('express');
const Tesseract = require('tesseract.js');

const router = express.Router();
router.use(express.json());

router.post('/extract-text', async (req, res) => {
  const { imageUrl, language } = req.body;

  try {
    const result = await Tesseract.recognize(imageUrl, language);
    const extractedText = result.data.text.trim();

    res.json({ text: extractedText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while extracting text from the image.' });
  }
});

module.exports = router;
