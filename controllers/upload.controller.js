import multer from 'multer';
import expressAsyncHandler from 'express-async-handler';


const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});

export const upload = multer({ storage });

export const uploader = expressAsyncHandler(async(req, res) => {
  res.send(`/${req.file.path}`);
});


