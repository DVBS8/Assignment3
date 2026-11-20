const request = require('supertest');
const { expect } = require('chai');

const SERVER_URL = `http://localhost:3000`; // same port automate.js uses

describe('FoodItems API', () => {

  it('should return FoodItem details', async () => {
    const res = await request(SERVER_URL).get('/FoodItems');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.lengthOf(5);
    res.body.forEach(FoodItem =>{
      expect(FoodItem).to.have.property('id');
      expect(FoodItem).to.have.property('name');
      expect(FoodItem).to.have.property('price');
    })
  });

  it('should include stock when requested', async () => {
    const res = await request(SERVER_URL).get('/FoodItems');
    expect(res.status).to.equal(200);
    res.body.forEach(FoodItem => {
    expect(FoodItem).to.have.property('stock');
    });
  });

  it('should return 404 for non-existent FoodItem', async () => {
    const res = await request(SERVER_URL).get('/FoodItems/999');
  expect(res.status).to.equal(404);
  expect(res.body.error).to.equal('FoodItem not found');
    
  });

  it('should return 400 for invalid ID', async () => {
    const res = await request(SERVER_URL).get('/FoodItems/abc');
    expect(res.status).to.equal(400);
    expect(res.body.error).to.equal('Invalid FoodItem ID');
  });

});