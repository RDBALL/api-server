'use strict';

require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const foodSchema = require('./food.schema');
const clothesSchema = require('./clothes.schema');
const ModelInterface = require('./model-interface');

// 'postgres://localhost:5432/api-app'
// 'postgres://username:password@localhost:5432/api-app'
const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory': process.env.DATABASE_URL;

//instantiates our database
const sequelizeDatabase = new Sequelize(DATABASE_URL);

const FoodModel = foodSchema(sequelizeDatabase, DataTypes);
const ClothesModel = clothesSchema(sequelizeDatabase, DataTypes);

module.exports = {sequelizeDatabase, FoodModel, ClothesModel};