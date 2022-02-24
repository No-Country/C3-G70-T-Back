//postRouter

import { Router } from 'express';
import {
    createPost,
    getPosts
} from '../../controllers/post.controller.js';
import { isAuth } from '../../util/util.js';

const postRouter = Router();





// post posts router
postRouter.post('/', createPost);

// get posts router
postRouter.get('/', getPosts);


// // get Post/id router
// postRouter.get('/:id', getPostToId );

// //edit Post router
// postRouter.put('/edit/:id', editPost );

// // delete Post router
// postRouter.delete('/delete/:id', deletePost );


export default postRouter;