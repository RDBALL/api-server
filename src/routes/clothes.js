'use strict';

const express = require('express');
const { clothesInterface } = require('../models/');

const router = express.Router();

router.get('/clothes', async (req, res, next) => {
  try {
    const allRecords = await clothesInterface.read();
    res.status(200).send(allRecords);
  } catch (error) {
    res.status(404).send('Not found');
  }
});

router.get('/clothes/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const selectedRecord = await clothesInterface.read({where: { id }});
    res.status(200).send(selectedRecord);
  } catch (error) {
    res.status(404).send('Not found');
  }
});

router.post('/clothes', async (req, res, next) => {
  const clothes = req.body;
  try {
    let response = await clothesInterface.create(clothes);
    console.log('response: ', response);
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send('Cannot perform this method');
  }
});

router.put('/clothes/:id', async (req, res, next) => {
  try {
    const itemID = req.params.id;
    const data = req.body;
    const itemToUpdate = await clothesInterface.update(data, itemID);
    res.status(200).send(itemToUpdate);
  } catch (error) {
    res.status(404).send('Cannot perform this method');
  }
});

router.delete('/clothes/:id', async (req, res, next) => {
  try {
    const recordToDelete = req.params.id;
    await clothesInterface.delete(recordToDelete);
    res.status(200).send('Item Deleted');
  } catch (error) {
    res.status(404).send('Cannot perform this method');
  }
});

module.exports = router;