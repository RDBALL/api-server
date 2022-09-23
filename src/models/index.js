'use strict';

require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const foodSchema = require('./food.schema');
const clothesSchema = require('./clothes.schema');
const ModelInterface = require('./model-interface');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory': process.env.DATABASE_URL;

const sequelizeDatabase = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const FoodModel = foodSchema(sequelizeDatabase, DataTypes);
const ClothesModel = clothesSchema(sequelizeDatabase, DataTypes);

module.exports = {sequelizeDatabase, FoodModel, ClothesModel};