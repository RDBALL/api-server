'use strict';

const { sequelizeDatabase } = require('./src/models');
const { start } = require('./src/server');

// sync database and proof of life. Creates all associated tables
sequelizeDatabase.sync()
  .then(() => {
    console.log('Successful Connection');
  })
  .catch(err => console.error(err));

start();
