const supertest = require('supertest');
const app = require('../server/app');

const api = supertest(app);



module.exports  = {
  api
};