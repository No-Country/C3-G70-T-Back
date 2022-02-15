const expressAsyncHandler = require('express-async-handler');
const bcrypt = require("bcrypt");
const db = require('../mysqlConnection/mysqlConnection.js');

//register 
//using expressAsyncHandler to get better the async

const register = expressAsyncHandler(async (req, res) => {
    const { email, password, username, nickname } = req.body;

    try {
        //check if the user already exists
        const exist = `SELECT * FROM users WHERE email = '${email}' || username = '${username}'`;
        let user = await db.query(exist);
        if (user.length > 0) {
            return res.status(400).json({
                ok: false,
                msg: "User already exists",
            });
        }


        //using bcrypt to encrypt the password
        const salt = bcrypt.genSaltSync();
        const passwd = bcrypt.hashSync(password, salt);

        const sqlMakeUser = `INSERT INTO users ( username,password, email, nickname) VALUES ( '${username}',  '${passwd}', '${email}','${nickname}')`;
        usuario = await db.query(sqlMakeUser);

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

const getUsers = expressAsyncHandler(async (req,res)=>{
    res.send('users');
})


module.exports = {
    register,
    // login,
    getUsers
};