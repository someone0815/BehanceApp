const express = require('express');
const router = express.Router();
const multer = require('multer');
const mime = require('mime-types');
const crypto = require('crypto');

// /**
//  *@route POST api/users/profile
//  *@desc Return the Users Data
//  *@access Public
//  */

var storage = multer.diskStorage({
  destination: __basedir + '/public/uploads/',
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err);

      cb(null, raw.toString('hex') + '.' + mime.extension(file.mimetype));
    });
  },
});

var upload = multer({ storage: storage });

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (!allowedTypes.includes(file.mimetype)) {
    const error = new Error('Incorrect file');
    error.code = 'INCORRECT_FILETYPE';
    return cb(error, false);
  }
  cb(null, true);
};

router.post('/upload', upload.single('file'), function (req, res) {
  res.json({
    file: req.file,
    path: 'http://192.168.2.104:5000/uploads/' + req.file.filename,
  });
});
module.exports = router;
