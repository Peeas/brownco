const express = require('express');
const router = express.Router();
const pageController = require('../../controllers/page');

const isAuth = require('../../middleware/is-auth');
const { check } = require('express-validator');

const multer = require('multer');
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

router.get('/', pageController.getPages);

router.get('/:id', pageController.getPage);

router.put(
  '/:id',
  [
    isAuth,
    multer({
      storage: fileStorage,
      fileFilter: fileFilter
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
      storage: fileStorage,
      fileFilter: fileFilter
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
