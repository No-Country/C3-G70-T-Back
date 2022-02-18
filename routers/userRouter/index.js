//UserRouter

import { Router } from 'express';
import { register, getUsers, login } from '../../controllers/user.controller.js';
const userRouter = Router();



// register router
userRouter.post('/register', register );

// login
userRouter.post('/login', login );

// users router
userRouter.get('/', getUsers );


export default userRouter;