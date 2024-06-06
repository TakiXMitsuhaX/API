const express = require('express');
const scrapyard = require('scrapyard');
const { URL } = require('url');

const router = express.Router();
const scraper = new scrapyard({
  cache: './storage',
  debug: true,
  timeout: 300000,
  retries: 5,
  connections: 10,
});

router.get('/', (req, res) => {
  const url = req.query.url;

  scraper(url, (err, $) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    const links = [];
    $('a').each(function() {
      const href = $(this).attr('href');
      if (href && href.startsWith('http')) {
        try {
          new URL(href);
          links.push(href);
        } catch {
          // Invalid URL, do nothing
        }
      }
    });
    const headers = [];
    $('h1, h2, h3, h4, h5, h6').each(function() {
      headers.push($(this).text());
    });
    const paragraphs = [];
    $('p').each(function() {
      paragraphs.push($(this).text());
    });
    const title = $('title').text();
    const description = $('meta[name="description"]').attr('content');
    const data = {
      title,
      description,
      links,
      headers,
      paragraphs,
    };
    res.end(JSON.stringify(data, null, 2));
  });
});

router.post('/post', (req, res) => {
  const url = req.body.url;
  const form = req.body.form;

  scraper(
    {
      url,
      type: 'html',
      encoding: 'binary',
      method: 'POST',
      form,
    },
    (err, $) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      const links = [];
      $('a').each(function() {
        const href = $(this).attr('href');
        if (href && href.startsWith('http')) {
          try {
            new URL(href);
            links.push(href);
          } catch {
            // Invalid URL, do nothing
          }
        }
      });
      const headers = [];
      $('h1, h2, h3, h4, h5, h6').each(function() {
        headers.push($(this).text());
      });
      const paragraphs = [];
      $('p').each(function() {
        paragraphs.push($(this).text());
      });
      const title = $('title').text();
      const description = $('meta[name="description"]').attr('content');
      const data = {
        title,
        description,
        links,
        headers,
        paragraphs,
      };
      res.send(data);
    }
  );
});

module.exports = router;
