import expressAsyncHandler from 'express-async-handler';
import { genSaltSync, hashSync } from "bcrypt";
import db from '../mysqlConnection/mysqlConnection.js';
import { generateToken } from '../util/util.js';

//register 
//using expressAsyncHandler to get better the async

export const register = expressAsyncHandler(async (req, res) => {
    const { email, password, username, nickname } = req.body;

    try {
        //check if the user already exists
        const exist = `SELECT * FROM users WHERE email = '${email}' || username = '${username}'`;
        let user = await db.query(exist);
        console.log(user);
        if (user.length > 0) {
            return res.status(400).json({
                ok: false,
                msg: "User already exists",
            });
        }


        //using bcrypt to encrypt the password
        const salt = genSaltSync();
        const passwd = hashSync(password, salt);

        const sqlMakeUser = `INSERT INTO users ( username,password, email, nickname) VALUES ( '${username}',  '${passwd}', '${email}','${nickname}')`;
        user = await db.query(sqlMakeUser);

        // status code 201  if all goes well, return ok: true
        res.status(201).json({
            ok: true
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "An error has arisen in the process, please review",
        });
    }



});

export const login = async (req, res = response) => {
    const { email, password } = req.body;
    try {
      const exist = `SELECT * FROM users WHERE email = '${email}'`;
      let user = await db.query(exist);
      console.log(user);
  
      if (user?.length === 0) {
        return res.status(400).json({
          ok: false,
          msg: "User not exist with email",
        });
      }
  
      const {idDB, usernameDB, email:emailDB, password:passwordDB } = user[0];
      // password confirm
      const validPassword = bcrypt.compareSync(password, passwordDB);
      if (!validPassword) {
        return res.status(400).json({
          ok: false,
          msg: "Invalid password",
        });
      }
      // Generate JWT
      const token =  generateToken(user[0])

      res.json({
        ok: true,
        idDB,
        usernameDB,
        emailDB,
        token
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: "An error has arisen in the process, please review",
      });
    }
  };

export const  getUsers = expressAsyncHandler(async (req,res)=>{
    res.send('users');
})


