const express = require('express');
const router = express.Router();

const {
    body,
    check
} = require('express-validator');
const User = require('../../models/User');
const authController = require('../../controllers/auth');

router.post(
    '/register',
    [   
        body('email', 'Please enter a valid email address.')
        .isEmail()
        .normalizeEmail(),
        body('password', 'Password has to be valid with 5 or more characters.')
        .isLength({
            min: 5
        })
        .isAlphanumeric()
    ],
    authController.postRegister
);

router.post(
    '/login',
    [   
        body('email', 'Please enter a valid email address.')
        .isEmail()
        .normalizeEmail(),
        body('password', 'Passwordis required.')
        .exists()
    ],
    authController.postLogin
);


module.exports = router;