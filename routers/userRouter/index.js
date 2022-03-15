//UserRouter

import { Router } from 'express';
import { 
    register, 
    getUsers, 
    login, 
    getUserToId, 
    deleteUser, 
    editUser, 
    updateUser, 
    googleLogin
} from '../../controllers/user.controller.js';
import { isAuth } from '../../util/util.js';

const userRouter = Router();



// register router
userRouter.post('/register', register );

// login
userRouter.post('/login', login );

// google Login
userRouter.post('/googleLogin', googleLogin );



// get users router
userRouter.get('/', getUsers );

// get user/id router
userRouter.get('/:id', getUserToId );


//update user router
userRouter.put('/profile', isAuth, updateUser );

//edit user router
userRouter.put('/edit/:id', isAuth, editUser );

// delete user router
userRouter.delete('/delete/:id', isAuth, deleteUser );


export default userRouter;