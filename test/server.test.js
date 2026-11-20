const request = require('supertest');
const { expect } = require('chai');

const SERVER_URL = `http://localhost:3000`; // match the port automate.js uses

describe('GET /', () => {
  it('should return 200 OK', async () => {
  const res = await request(SERVER_URL).get('/');
  expect(res.status).to.equal(200);
 });
});