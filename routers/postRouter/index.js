//postRouter

import { Router } from 'express';
import {
    createPost,
    deletePost,
    editPost,
    getAllPostToUserId,
    getPosts,
    getPostToId,
    likesPost
} from '../../controllers/post.controller.js';
import { isAuth } from '../../util/util.js';

const postRouter = Router();





// post posts router
postRouter.post('/', createPost);

// get posts router
postRouter.get('/', getPosts);


// get Post/id router
postRouter.get('/:id', getPostToId );

// get Post/id router
postRouter.get('/userPosts/:userid', getAllPostToUserId );

//edit Post router
postRouter.put('/edit/:id', editPost );

//update likes Post router
postRouter.put('/likes/:id', likesPost );


// delete Post router
postRouter.delete('/delete/:id', deletePost );


export default postRouter;