'use strict';

const express = require('express');
const { ClothesModel } = require('../models/');

const router = express.Router();

router.get('/clothes', async (req, res, next) => {
  try {
    const allRecords = await ClothesModel.findAll();
    res.status(200).send(allRecords);
  } catch (error) {
    res.status(404).send('Not found');
  }
});

router.get('/clothes/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const selectedRecord = await ClothesModel.findOne({where: { id }});
    res.status(200).send(selectedRecord);
  } catch (error) {
    res.status(404).send('Not found');
  }
});

router.post('/clothes', async (req, res, next) => {
  const clothes = req.body;
  try {
    let response = await ClothesModel.create(clothes);
    console.log('response: ', response);
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send('Cannot perform this method');
  }
});

router.put('/clothes/:id', async (req, res, next) => {
  const { id } = req.params;
  const updatedRecord = req.body;
  try {
    const selectedRecord = await ClothesModel.findOne({where: { id }});
    await selectedRecord.update(updatedRecord);
    await selectedRecord.save();
    res.status(200).send(selectedRecord);
  } catch (error) {
    res.status(404).send('Cannot perform this method');
  }
});

router.delete('/clothes/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const recordToDelete = await ClothesModel.findOne({where: { id }});
    await recordToDelete.destroy();
    res.status(200).send(recordToDelete);
  } catch (error) {
    res.status(404).send('Cannot perform this method');
  }
});

module.exports = router;