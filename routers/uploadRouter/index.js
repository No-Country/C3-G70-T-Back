import express from 'express';
import { uploadAvatar, uploadBackgroundImage, uploaderAvatar, uploaderBackgroundImage } from '../../controllers/upload.controller.js';
import { isAuth } from '../../util/util.js';





const uploadRouter = express.Router();

//Avatar
uploadRouter.post('/avatar', isAuth, uploadAvatar.single('imagenAvatar'), uploaderAvatar);

//BackgroundImage
uploadRouter.post('/backgroundImage', isAuth, uploadBackgroundImage.single('imagenBackgroundImage'), uploaderBackgroundImage);


export default uploadRouter;
