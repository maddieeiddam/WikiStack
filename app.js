const express = require('express');
const morgan = require('morgan');
const router = require('./routes/index.js');

//pointer to express
const app = express();

//middleware
app.use(express.urlencoded({ extended: false}));
app.use(morgan('dev'));
app.use(express.static(__dirname + 'public'));
app.use('/', router);

//port setup
const port = 1337;

app.listen(port, () => {
  console.log(`App listening in port ${port}`);
});
