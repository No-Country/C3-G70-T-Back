//CommentRouter

import { Router } from 'express';
import {
    createComment,
    deleteComment,
    editComment,
    getComments,
    getCommentToId,
    likesComment
} from '../../controllers/comments.controller.js';
import { isAuth } from '../../util/util.js';

const CommentRouter = Router();





// Comment Comments router
CommentRouter.post('/',isAuth, createComment);

// get Comments router
CommentRouter.get('/commentToPosts/:postid',isAuth, getComments);


// get Comment/id router
CommentRouter.get('/:id',isAuth, getCommentToId );


//edit Comment router
CommentRouter.put('/edit/:id',isAuth, editComment );

//update likes Comment router
CommentRouter.put('/likes/:id',isAuth, likesComment );


// delete Comment router
CommentRouter.delete('/delete/:id',isAuth, deleteComment );


export default CommentRouter;