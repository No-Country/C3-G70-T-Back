//UserRouter

import { Router } from 'express';
import { register, getUsers, login, getUserToId, deleteUser, editUser, updateUser } from '../../controllers/user.controller.js';

const userRouter = Router();



// register router
userRouter.post('/register', register );

// login
userRouter.post('/login', login );

// get users router
userRouter.get('/', getUsers );

// get user/id router
userRouter.get('/:id', getUserToId );

// delete user router
userRouter.delete('/delete/:id', deleteUser );

//update user router
userRouter.put('/profile', updateUser );

//edit user router
userRouter.put('/edit/:id', editUser );



export default userRouter;