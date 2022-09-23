'use strict';

const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const foodRoute = require('./routes/food');
const clothesRoute = require('./routes/clothes');
const errorNotFound = require('./error-handlers/404');
const serverError = require('./error-handlers/500');

require('dotenv').config();

const PORT = process.env.PORT || 3003;

app.use(logger);
app.use(express.json());

app.use(foodRoute);
app.use(clothesRoute);


app.get('/', (req, res) => {
  res.status(200).send('👍 Server is running for RDBALL Code 401d48 Lab04.');
});

app.use('*', errorNotFound);

app.use(serverError);

function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = { app, start };