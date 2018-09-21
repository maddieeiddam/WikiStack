const express = require('express');
const morgan = require('morgan');
const router = require('./routes/index.js');
const wiki = require('./routes/wiki.js');
const user = require('./routes/user.js');
const parser = require('body-parser');
const index = require('./routes/index.js');

require('html-template-tag');
const {
  db,
  User,
  Page
} = require('./models');

//pointer to express
const app = express();

//middleware
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.urlencoded({
  extended: false
}));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

// app.use('/', router);

app.use('/wiki', wiki);
app.use('/users', user);
app.use('/', index);

db.authenticate().
then(() => {
  console.log('connected to the database');
})

//port setup
const port = 3000;

const init = async () => {
  await User.sync({
    // force: true
  });
  await Page.sync({
    // force: true
  });

  app.listen(port, () => {
    console.log(`App listening in port ${port}`);
  });
}

init();
