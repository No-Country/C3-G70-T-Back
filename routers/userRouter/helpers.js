import supertest from 'supertest';
import app from '../../server/app';

export const api = supertest(app);

//user register
export const newUser = {
  username: "prueba",
  email: "prueba@gmail.com",
  password: "123456789",
  nickname: "prueba"
};


// user login
export const userLogin = {
  email: "prueba@gmail.com",
  password: "123456789",
};

