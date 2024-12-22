const express = require('express');
const router=express.Router();
const captainController=require('../controllers/captain.controller');
const {body}=require("express-validator");
const { authCaptain } = require('../middlewares/auth.middleware');



router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First Name must be atleast 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters long'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be atleast 3 characters long'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be atleast 3 characters long'),
    body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number'),
    body('vehicle.vehicleType').isIn(['motorcycle','car','auto']).withMessage('Invalid Vehicle Type'),
],captainController.registerCaptain);

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters long')
],captainController.loginCaptain)

router.get('/profile',authCaptain,captainController.getCaptainProfile)
router.get('/logout',authCaptain,captainController.logoutCaptain)

module.exports=router;  