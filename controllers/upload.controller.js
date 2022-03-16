import multer from 'multer';
import expressAsyncHandler from 'express-async-handler';
import cloudinary from "cloudinary"
import path from "path"
import { cloudConfig } from '../cloudinaryConnection/config.js';
import fs from "fs/promises"

cloudinary.config(cloudConfig)


//Avatar
const storageAvatar = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/avatar/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now() + path.extname(file.originalname)}`);
  },
});

export const uploadAvatar = multer({ storage: storageAvatar });

export const uploaderAvatar = expressAsyncHandler(async (req, res) => {
  try {

    const result = await cloudinary.v2.uploader.upload(req.file.path);

    //link image cloudinary
    res.send(result.url);

    //link image local
    // res.send(`https://api-ingamer.herokuapp.com/${req.file.path}`);

    await fs.unlink(req.file.path)

  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: "An error has arisen in the process, please review"
    })
  }
});

//BackgroundImage
const storageBackgroundImage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/backgroundImage/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now() + path.extname(file.originalname)}`);
  },
});

export const uploadBackgroundImage = multer({ storage: storageBackgroundImage });

export const uploaderBackgroundImage = expressAsyncHandler(async (req, res) => {
  try {
    const result = await cloudinary.v2.uploader.upload(req.file.path);

    //link image cloudinary
    res.send(result.url);

    //link image local
    // res.send(`https://api-ingamer.herokuapp.com/${req.file.path}`);
    
    await fs.unlink(req.file.path)
  

  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: "An error has arisen in the process, please review"
    })
  }
});

//Posts
const storagePosts = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/posts/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now() + path.extname(file.originalname)}`);
  },
});

export const uploadPosts = multer({ storage: storagePosts });

export const uploaderPosts = expressAsyncHandler(async (req, res) => {
  try {
    const result = await cloudinary.v2.uploader.upload(req.file.path);

    //link image cloudinary
    res.send(result.url);

    //link image local
    // res.send(`https://api-ingamer.herokuapp.com/${req.file.path}`);

    await fs.unlink(req.file.path)

  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: "An error has arisen in the process, please review"
    })
  }
});


