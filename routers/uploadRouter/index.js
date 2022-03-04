import express from 'express';
import { uploadAvatar, uploadBackgroundImage, uploaderAvatar, uploaderBackgroundImage, uploaderPosts, uploadPosts } from '../../controllers/upload.controller.js';
import { isAuth } from '../../util/util.js';





const uploadRouter = express.Router();

//Avatar
uploadRouter.post('/avatar', isAuth, uploadAvatar.single('imagenAvatar'), uploaderAvatar);

//BackgroundImage
uploadRouter.post('/backgroundImage', isAuth, uploadBackgroundImage.single('imagenBackgroundImage'), uploaderBackgroundImage);

//Posts
uploadRouter.post('/posts', isAuth, uploadPosts.single('imagenPosts'), uploaderPosts);


export default uploadRouter;
