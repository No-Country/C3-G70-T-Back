//FriendRouter

import { Router } from 'express';
import {
    createFriend,
    deletefriend,
    getAllFriendToUserId,
    getFriendToId,
} from '../../controllers/Friends.controller.js';
import { isAuth } from '../../util/util.js';

const FriendRouter = Router();





// Friend Friends router
FriendRouter.post('/',isAuth, createFriend);

// get Friends router
FriendRouter.get('/friendToUserid/:id',isAuth, getAllFriendToUserId);


// get Friend/id router
FriendRouter.get('/:id',isAuth, getFriendToId );


// delete Friend router
FriendRouter.delete('/delete/:id',isAuth, deletefriend );


export default FriendRouter;