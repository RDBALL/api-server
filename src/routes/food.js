'use strict';

const express = require('express');
const { FoodModel } = require('../models/');

const router = express.Router();

router.get('/food', async (req, res, next) => {
  try {
    const allRecords = await FoodModel.findAll();
    res.status(200).send(allRecords);
  } catch (error) {
    res.status(404).send('Not found');
  }
});

router.get('/food/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const selectedRecord = await FoodModel.findOne({where: { id }});
    res.status(200).send(selectedRecord);
  } catch (error) {
    res.status(404).send('Not found');
  }
});

router.post('/food', async (req, res, next) => {
  const food = req.body;
  try {
    let response = await FoodModel.create(food);
    console.log('response: ', response);
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send('Cannot perform this method');
  }
});

router.put('/food/:id', async (req, res, next) => {
  const { id } = req.params;
  const updatedRecord = req.body;
  try {
    const selectedRecord = await FoodModel.findOne({where: { id }});
    await selectedRecord.update(updatedRecord);
    await selectedRecord.save();
    res.status(200).send(selectedRecord);
  } catch (error) {
    res.status(404).send('Cannot perform this method');
  }
});

router.delete('/food/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const recordToDelete = await FoodModel.findOne({where: { id }});
    await recordToDelete.destroy();
    res.status(200).send(recordToDelete);
  } catch (error) {
    res.status(404).send('Cannot perform this method');
  }
});

module.exports = router;