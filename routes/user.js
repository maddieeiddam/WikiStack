const express = require('express');
const router = express.Router();
//const addPage = require('../views/addPage.js');

router.get('/', (req, res) => {
  //res.send('4');
  res.redirect('/wiki');
});

router.get('/:id', (req, res) => {
  res.redirect('/');
});

router.post('/', (req, res) => {
  res.redirect('/');
});

router.put('/:id', (req, res) => {
  res.redirect('/');
});

router.delete('/:id', (req, res) => {
  res.redirect('/');
});

module.exports = router;
