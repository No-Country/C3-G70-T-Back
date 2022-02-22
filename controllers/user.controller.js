import expressAsyncHandler from 'express-async-handler';
import bcrypt from "bcryptjs";
import db from '../mysqlConnection/mysqlConnection.js';
import { generateToken } from '../util/util.js';

//using expressAsyncHandler to get better the async

//register 
export const register = expressAsyncHandler(async (req, res) => {
  const { email, password, username, nickname } = req.body;

  try {
    //check if the user already exists
    const sqlMakeUser = `SELECT * FROM users WHERE email = '${email}' || username = '${username}'`;
    let user = await db.query(sqlMakeUser);
    console.log(user);
    if (user.length > 0) {
      return res.status(400).json({
        ok: false,
        msg: "User already exists"
      });
    }


    //using bcrypt to encrypt the password
    const salt = bcrypt.genSaltSync();
    const passwd = bcrypt.hashSync(password, salt);

    const sqlMakeUser = `INSERT INTO users ( username,password, email, nickname) VALUES ( '${username}',  '${passwd}', '${email}','${nickname}')`;
    user = await db.query(sqlMakeUser);

    // status code 201  if all goes well, return ok: true
    res.status(201).json({
      ok: true,
      msg: "Registered user"
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "An error has arisen in the process, please review"
    });
  }



});


//login
export const login = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const sqlMakeUser = `SELECT * FROM users WHERE email = '${email}'`;
    let user = await db.query(sqlMakeUser);

    if (user?.length === 0) {
      return res.status(400).json({
        ok: false,
        msg: "User not exist with email"
      });
    }



    const { id: idDB, username: usernameDB, email: emailDB, password: passwordDB } = user[0];
    // password confirm
    const validPassword = bcrypt.compareSync(password, passwordDB);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Invalid password"
      });
    }
    // Generate JWT
    const token = generateToken(user[0])

    res.json({
      ok: true,
      id: idDB,
      username: usernameDB,
      emial: emailDB,
      token
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "An error has arisen in the process, please review"
    });
  }
});



//delete user
export const deleteUser = expressAsyncHandler(async (req, res) => {
  try {

    const { id } = req.params;
    const sqlMakeUser = `'DELETE FROM users WHERE id = ${id}'`
    const user = await db.query(sqlMakeUser);
    console.log(user);
    if (user[0]) {
      res.status(201).json({
        ok: true,
        msg: "User removed successfully"
      });
    } else {
      res.status(404).json({
        ok: false,
        msg: "User not found"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "An error has arisen in the process, please review"
    });
  }
});


//updtae profile
export const updateUser = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description, url } = req.body;
  const newUser = {
    title,
    description,
    url
  };
  await pool.query('UPDATE users set ? WHERE id = ?', [newUser, id]);
  res.status(201).json({
    ok: true,
    msg: "User updated successfully"
  });
});



//edite user
export const editUser = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    
    
    // query to mysql DB 
    const sqlMakeUser = `'SELECT * FROM users WHERE id = ${id}'`
    const user = await db.query(sqlMakeUser);
    
  // data from mysql DB
  const { username: usernameDB, email: emailDB,  nickname: nicknameDB } = user[0];

  // data from require body
  const { username, email, nickname } = req.body;

  if (user[0]) {
    newUser = {
      username: username || usernameDB,
      email: email || emailDB,
      nickname: nickname || nicknameDB
    }
    
    await db.query('UPDATE users set ? WHERE id = ?', [newUser, id]);
    res.status(201).json({
      ok: true,
      msg: "User updated successfully"
    });
  }else{
    res.status(404).json({
      ok: false,
      msg: "User not found"
    });
  };
} catch (error) {
  console.log(error);
  res.status(500).json({
    ok: false,
    msg: "An error has arisen in the process, please review"
  });
}
});





//get users
export const getUsers = expressAsyncHandler(async (req, res) => {
  res.send('users');
})

//get to id user
export const getUserToId = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const sqlMakeUser = `'SELECT * FROM users WHERE id = ${id}'`
    const user = await db.query(sqlMakeUser);

    const { id: idDB, username: usernameDB, email: emailDB, nickname: nicknameDB } = user[0];

    console.log(user);
    res.status(201).json({
      ok: true,
      id: idDB,
      username: usernameDB,
      emial: emailDB,
      nickname: nicknameDB
    });

  } catch (error) {

  }
});