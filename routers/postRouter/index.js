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
postRouter.post('/',isAuth, createPost);

// get posts router
postRouter.get('/',isAuth, getPosts);


// get Post/id router
postRouter.get('/:id',isAuth, getPostToId );

// get Post/id router
postRouter.get('/userPosts/:userid',isAuth, getAllPostToUserId );

//edit Post router
postRouter.put('/edit/:id',isAuth, editPost );

//update likes Post router
postRouter.put('/likes/:id',isAuth, likesPost );


// delete Post router
postRouter.delete('/delete/:id',isAuth, deletePost );


export default postRouter;