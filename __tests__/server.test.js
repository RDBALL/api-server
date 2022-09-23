'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/models/index');
const request = supertest(app);

beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe('Testing REST API', () => {

  describe('Error handling tests', () => {
    test('404 on a bad route', async () => {
      let res = await request.get('/badroute');
      expect(res.status).toEqual(404);
      expect(res.text).toEqual('Not found');
    });
  });

  let food = {
    id: 1,
    name: 'Chow Mein',
    cuisine: 'chinese',
  };

  describe('Testing CRUD status', () => {
    describe('Food route', () => {
      test('Return JSON object', async () => {
        let res = await request.get('/food');
        expect(res.status).toEqual(200);
      });

      test('Read a single record using GET', async () => {
        let res = await request.get('/food/1');
        expect(res.status).toEqual(200);
      });

      test('Add a single record using POST', async () => {
        let res = await request.post('/food').send(food);
        expect(res.status).toEqual(200);
        expect(res.body.name).toEqual('Chow Mein');
        expect(res.body.cuisine).toEqual('chinese');
      });

      test('Update a record using PUT', async () => {
        let res = await request.put('/food/1');
        expect(res.status).toEqual(200);
      });

      test('Destroy a record using DELETE', async () => {
        let res = await request.delete('/food/1');
        expect(res.status).toEqual(200);
      });
    });

    let clothes = {
      id: 1,
      typeOfClothing: 'shirt',
      brand: 'nike',
    };

    describe('Clothes route', () => {
      test('Return JSON object', async () => {
        let res = await request.get('/clothes');
        expect(res.status).toEqual(200);
      });

      test('Read a single record using GET', async () => {
        let res = await request.get('/clothes/1');
        expect(res.status).toEqual(200);
      });

      test('Add a single record using POST', async () => {
        let res = await request.post('/clothes').send(clothes);
        expect(res.status).toEqual(200);
        expect(res.body.typeOfClothing).toEqual('shirt');
        expect(res.body.brand).toEqual('nike');
      });

      test('Update a record using PUT', async () => {
        let res = await request.put('/clothes/1');
        expect(res.status).toEqual(200);
      });

      test('Destroy a record using DELETE', async () => {
        let res = await request.delete('/clothes/1');
        expect(res.status).toEqual(200);
      });
    });
  });
});