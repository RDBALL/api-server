'use strict';

const express = require('express');
const { foodInterface } = require('../models/');

const router = express.Router();

router.get('/food', async (req, res, next) => {
  try {
    const allRecords = await foodInterface.read();
    res.status(200).send(allRecords);
  } catch (error) {
    res.status(404).send('Not found');
  }
});

router.get('/food/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const selectedRecord = await foodInterface.read({where: { id }});
    res.status(200).send(selectedRecord);
  } catch (error) {
    res.status(404).send('Not found');
  }
});

router.post('/food', async (req, res, next) => {
  const food = req.body;
  try {
    let response = await foodInterface.create(food);
    console.log('response: ', response);
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send('Cannot perform this method');
  }
});

router.put('/food/:id', async (req, res, next) => {
  try {
    const itemID = req.params.id;
    const data = req.body;
    const itemToUpdate = await foodInterface.update(data, itemID);
    res.status(200).send(itemToUpdate);
  } catch (error) {
    res.status(404).send('Cannot perform this method');
  }
});

router.delete('/food/:id', async (req, res, next) => {
  try {
    const recordToDelete = req.params.id;
    await foodInterface.delete(recordToDelete);
    res.status(200).send('Item Deleted');
  } catch (error) {
    res.status(404).send('Cannot perform this method');
  }
});

module.exports = router;