const express = require('express');
const router = express.Router();
const isAuth = require('../../middleware/is-auth');
// job model
const Job = require('../../models/Job');
const jobsController = require('../../controllers/jobs')
const {
  check,
  body
} = require('express-validator');

router.get('/', jobsController.getJobs);

router.post('/', [isAuth, [
  check('title', 'Title is required').not().isEmpty(),
  check('responsibilities').not().isEmpty()
]] , jobsController.postJob);

module.exports = router;