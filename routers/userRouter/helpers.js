const supertest = require('supertest');
const app = require('../../server/app');

const api = supertest(app);




const newUser = {
  username: "prueba",
  email: "prueba@gmail.com",
  password: "123456789",
  nickname: "prueba"

};



module.exports  = {
  api,
  newUser
};