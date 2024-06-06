const express = require('express');
const swaggerDocument = require('./apiRoutes.json');
const gttsRouter = require('./routes/gtts');
//const gpt-goRouter = require('./routes/gpt-go');
const animeQuoteRouter = require('./routes/animequotes');
const brainlyRouter = require('./routes/brainly');
const gsmarenaRouter = require('./routes/gsmarena');
const animeRouter = require('./routes/anime');
const gscraperRouter = require('./routes/gscraper');
const scraperRouter = require('./routes/scraper');
const ytsearchRouter = require('./routes/ytsearch');
const ocrRouter = require('./routes/ocr');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 3000;
const swaggerUi = require('swagger-ui-express'); 
app.use(express.json());
app.use(compression());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/gtts', gttsRouter);
app.use('/animequote', animeQuoteRouter);
app.use('/brainly', brainlyRouter);
app.use('/gsmarena', gsmarenaRouter);
app.use('/anime', animeRouter);
app.use('/gscraper', gscraperRouter);
app.use('/scraper', scraperRouter);
app.use('/ytsearch', ytsearchRouter);
app.use('/ocr', ocrRouter);
//app.use('/gpt-go', gpt-goRouter);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/homepage.html');
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`); 
});
