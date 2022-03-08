//FriendRouter

import { Router } from 'express';
import {
    createFriend,
    deletefriend,
    getAllFriendToUserId,
    getFriendToId,
} from '../../controllers/friends.controller.js';
import { isAuth } from '../../util/util.js';

const friendRouter = Router();





// Friend Friends router
friendRouter.post('/',isAuth, createFriend);

// get Friends from user router
friendRouter.get('/friendToUserid/:id',isAuth, getAllFriendToUserId);


// get Friend/id router
friendRouter.get('/:id',isAuth, getFriendToId );


// delete Friend router
friendRouter.delete('/delete/:id',isAuth, deletefriend );


export default friendRouter;