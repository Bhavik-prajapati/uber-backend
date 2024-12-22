const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

const {body}=require("express-validator");
const { authUser } = require('../middlewares/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First Name must be atleast 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters long')
],userController.registerUser);


router.post('/login',[body('email').isEmail().withMessage('Invalid Email'), body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters long')],userController.loginUser)


router.get('/profile',authUser,userController.getUserProfile)
module.exports = router;

router.get('/logout',authUser,userController.logoutUser)
module.exports = router;