//UserRouter

const express = require('express');
const { register, getUsers } = require('../../controllers/user.controller');
const userRouter = express.Router();



// register router
userRouter.post('/register', register );


userRouter.get('/', getUsers );


module.exports = userRouter;