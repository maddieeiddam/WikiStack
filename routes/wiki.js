const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage.js');
const { Page } = require("../models");
const wikipage = require('../views/wikipage.js');

router.get('/add', (req, res) => {
  res.send(addPage());
});

router.get('/:slug', async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug
      }
    });
    res.send(wikipage(page));
  } catch (error) { next(error) }
});

//post a new article using form, add to database
router.post('/', async (req, res, next) => {
  // STUDENT ASSIGNMENT:
  const page = new Page({
    name: `${req.body.name}`,
    title: `${req.body.title}`,
    content: `${req.body.content}`,
  });
    console.log(page);

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect(`/wiki/${page.slug}`);
    console.log('your page was saved to the database');
  } catch (error) { next(error) }
});

module.exports = router;

