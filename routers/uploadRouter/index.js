import express from 'express';
import { upload, uploader } from '../../controllers/upload.controller.js';
import { isAuth } from '../../util/util.js';





const uploadRouter = express.Router();


uploadRouter.post('/', upload.single('imagen'), uploader);


export default uploadRouter;
