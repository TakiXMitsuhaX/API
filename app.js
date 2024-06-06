/**  const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./apiRoutes.json');

//*Routes for Api's Files
const gttsRouter = require('./routes/gtts');
const animeQuoteRouter = require('./routes/animequotes');
const brainlyRouter = require('./routes/brainly');
const gsmarenaRouter = require('./routes/gsmarena');
const lyricsRouter = 
require('./routes/lyrics');
const animeRouter = 
require('./routes/anime');
const gscraperRouter =
require('./routes/gscraper');
const scraperRouter = 
require('./routes/scraper');
const ytsearchRouter =
require('./routes/ytsearch');
const ocrRouter = 
require('./routes/ocr');


const app = express();
const port = process.env.PORT || 3000;

// JSON middleware
app.use(express.json());

// Serve Swagger UI documentation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Route to serve REST API homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/homepage.html');
});

// Routes for APIs
app.use('/gtts', gttsRouter);
app.use('/animequote', animeQuoteRouter);
app.use('/brainly', brainlyRouter);
app.use(`/gsmarena`, gsmarenaRouter);
app.use('/lyrics', lyricsRouter);
app.use('/anime', animeRouter);
app.use('/gscraper', gscraperRouter);
app.use('/scraper', scraperRouter);
app.use('/ytsearch' ,ytsearchRouter);
app.use('/ocr' , ocrRouter);



// Start server
app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
*/
const express = require('express');
const swaggerDocument = require('./apiRoutes.json');
const gttsRouter = require('./routes/gtts');
const animeQuoteRouter = require('./routes/animequotes');
const brainlyRouter = require('./routes/brainly');
const gsmarenaRouter = require('./routes/gsmarena');
const lyricsRouter = require('./routes/lyrics');
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
app.use('/lyrics', lyricsRouter);
app.use('/anime', animeRouter);
app.use('/gscraper', gscraperRouter);
app.use('/scraper', scraperRouter);
app.use('/ytsearch', ytsearchRouter);
app.use('/ocr', ocrRouter);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/homepage.html');
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`); 
});