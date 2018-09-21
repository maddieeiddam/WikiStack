const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage.js');

router.get('/', (req, res) => {
  res.send('1');
});

router.post('/', (req, res) => {
  res.send('2');
});

router.get('/add', (req, res) => {
  res.send(addPage());
});

module.exports = router;
