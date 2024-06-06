 /* 
const express = require('express');
const gsmarena = require('gsmarena-api');

const router = express.Router();

router.get('/device/search', async (req, res) => {
  const query = req.query.q;
  const devices = await gsmarena.search.search(query);
  const prettyDevices = JSON.stringify(devices, null, 2);
  res.setHeader('Content-Type', 'application/json');
  res.send(prettyDevices);
});


router.get('/device/deals', async (req, res) => {
  const deals = await gsmarena.deals.getDeals();
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(deals, null, 2));
  
});

router.get('/device/deviceId', async (req, res) => {
  const deviceId = req.params.deviceId;
  const device = await gsmarena.catalog.getDevice(deviceId);
  const devicePretty = JSON.stringify(device, null, 2);
  res.setHeader('Content-Type', 'application/json');
  res.send(devicePretty);
});

router.get('/device/top', async (req, res) => {
  const top = await gsmarena.top.get(); 
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(top, null, 2));
});  


module.exports = router; */

const express = require('express');
const gsmarena = require('gsmarena-api');

const router = express.Router();

router.get('/device/search', async (req, res) => {
  const query = req.query.q;
  const devices = await gsmarena.search.search(query);
  const prettyDevices = JSON.stringify(devices, null, 2);
  res.setHeader('Content-Type', 'application/json');
  res.send(prettyDevices);
});

router.get('/device/deals', async (req, res) => {
  const deals = await gsmarena.deals.getDeals();
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(deals, null, 2));
});

router.get('/device/top', async (req, res) => {
  const top = await gsmarena.top.get();
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(top, null, 2));
});

router.get('/device/:name', async (req, res) => {
  const name = req.params.name;
  const device = await gsmarena.catalog.getDevice(name);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(device, null, 2));
});

module.exports = router;
