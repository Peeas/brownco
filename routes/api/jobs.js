const express = require('express');
const router = express.Router();
const isAuth = require('../../middleware/is-auth');
// job model
const Job = require('../../models/Job');
const jobsController = require('../../controllers/jobs');
const multer = require('multer');
const {
  check,
  body
} = require('express-validator');

router.get('/', jobsController.getJobs);

router.post('/resume/:id', multer().single('file'),jobsController.postResume);


router.post('/', [isAuth, [
  check('title', 'Title is required').not().isEmpty(),
  check('responsibilities').not().isEmpty()
]] , jobsController.postJob);

router.delete('/:id', isAuth, jobsController.deleteJob)
router.put('/:id', isAuth, jobsController.editJob)

module.exports = router;