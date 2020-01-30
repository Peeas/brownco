const express = require('express');
const router = express.Router();
const isAuth = require('../../middleware/is-auth');
const Page = require('../../models/Pages');
router.get('/', pageController.getPages);
router.put('/:id', isAuth, jobsController.editPage);
