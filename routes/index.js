const express = require('express');
const router = express.Router();
const layout = require('../views/layout.js');

//homepage
router.get('/', (req, res) => {
  res.send(layout('Hello World'));
});

module.exports = router;
