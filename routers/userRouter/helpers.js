import supertest from 'supertest';
import app from '../../server/app';
import db from '../../mysqlConnection/mysqlConnection.js';


export const api = supertest(app);



////// users

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
  password: "123456789"
};

//user update
export const updatedUser = {
  username: "update prueba",
  email: "updateprueba@gmail.com",
  password: "938472829",
  nickname: " updateprueba"
};


//user update to id
export const updatedUserToId = {
  username: "update prueba",
  email: "updateprueba@gmail.com",
  nickname: " updateprueba"
};


//Delete all register
export const deleteAllmysqlDB = () => {
  const judgmentQuery = `DELETE FROM users`;
  db.query(judgmentQuery);
}


//get all users
export const getAllUsersDB = async () => {
  try {
    const sqlMakeUser = `SELECT * FROM users`
    const user = await db.query(sqlMakeUser);

    console.log(user[0]);
    return user[0]

  } catch (error) {
    console.log(error);
  }
}



export const  userLogined = async () => {
  try {
    const responseLogin = await api.post('/api/users/login')
      .send(userLogin)

    console.log(responseLogin.body);
    return responseLogin

  } catch (error) {
    console.log(error);
  }
}



