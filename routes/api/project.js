const express = require('express');
const router = express.Router();

const isAuth = require('../../middleware/is-auth');
const projectController = require('../../controllers/project');
const Project = require('../../models/Project');
const multer = require('multer');
const { check } = require('express-validator');
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

router.get('/', projectController.getProjects);

router.post(
  '/add-project',
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
      limits: { fileSize: 5 * 1024 * 1024 }
    }).single('image'),
    [
      check('title', 'title is required')
        .not()
        .isEmpty(),
      check('description', 'description is required')
        .not()
        .isEmpty(),
      check('pageId', 'page is required').not().isEmpty()
    ]
  ],
  projectController.postProject
);
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
      limits: { fileSize: 5 * 1024 * 1024}
    }).single('image'),
    [
      check('title', 'title is required')
        .not()
        .isEmpty(),
      check('description', 'description is required')
        .not()
        .isEmpty()
    ] 
  ],
  projectController.editProject
);

router.delete('/:id/page/:pageId', projectController.deleteProject)


module.exports = router;
