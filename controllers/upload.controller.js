import multer from 'multer';
import expressAsyncHandler from 'express-async-handler';


//Avatar
const storageAvatar = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/avatar/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});

export const uploadAvatar = multer({ storage: storageAvatar });

export const uploaderAvatar = expressAsyncHandler(async(req, res) => {
    try {
        res.send(`https://api-ingamer.herokuapp.com/${req.file.path}`);
    } catch (error) {  
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: error
        })
    }
});

//BackgroundImage
const storageBackgroundImage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/backgroundImage/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});

export const uploadBackgroundImage = multer({storage: storageBackgroundImage });

export const uploaderBackgroundImage = expressAsyncHandler(async(req, res) => {
    try {
        res.send(`https://api-ingamer.herokuapp.com/${req.file.path}`);
    } catch (error) {  
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: error
        })
    }
});

