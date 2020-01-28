const express = require('express');
const router = express.Router();
const isAuth = require('../../middleware/is-auth');
const projectController = require('../../controllers/project');
const multer = require('multer');
const { check } = require('express-validator');
const DIR = './images';
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  }
});
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
      storage: fileStorage,
      fileFilter: fileFilter
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
  projectController.postProject
);
router.put('/:id', isAuth, projectController.editProject);


module.exports = router;
