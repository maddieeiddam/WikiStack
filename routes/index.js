const express = require('express');
const router = express.Router();
const layout = require('../views/layout.js');
const { Page } = require("../models");
const main = require('../views/main.js');

//homepage
router.get('/', async (req, res) => {
  let pages = await Page.findAll();
  console.log('this should be pages', pages);
  res.send(main(pages));
});

module.exports = router;

