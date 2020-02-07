const express = require('express');
const router = express.Router();
const pageController = require('../../controllers/page');

const isAuth = require('../../middleware/is-auth');
const { check } = require('express-validator');

const multer = require('multer');
const multerS3 = require('multer-s3')
const aws = require('aws-sdk');

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
})
const s3 = new aws.S3();
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

router.get('/', pageController.getPages);

router.get('/:id', pageController.getPage);

router.put(
  '/:id',
  [
    isAuth,
    multer({
      storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET_NAME,
        key: function(req, file, cb) {
          cb(null, new Date().toISOString() + '-' + file.originalname);
        }
      }),
      fileFilter: fileFilter,
      limits: { fileSize: 4 * 1024 * 1024 }
    }).single('image'),
    [
      check('name', 'name is required')
        .not()
        .isEmpty()
    ]
  ],
  pageController.editPage
);

router.delete('/:id', isAuth, pageController.deletePage);

router.post(
  '/add-page',
  [
    isAuth,
    multer({
      storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET_NAME,
        key: function(req, file, cb) {
          cb(null, new Date().toISOString() + '-' + file.originalname);
        }
      }),
      fileFilter: fileFilter,
      limits: { fileSize: 4 * 1024 * 1024 }
    }).single('image'),
    [
      check('name', 'name is required')
        .not()
        .isEmpty()
    ]
  ],
  pageController.postPage
);

module.exports = router;
