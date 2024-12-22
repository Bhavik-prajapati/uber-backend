const userModel = require('../models/user.model');
const userservice=require('../services/user.service');
const {validationResult}=require('express-validator');

module.exports.registerUser=async(req,res,next)=>{

    console.log(req.body,"body....")
    console.log(req.body,"body....")
    console.log(req.body,"body....")

    const errors=validationResult(req);

    if(!errors.isEmpty()){
        console.log(errors.array(),"err")
        return res.status(400).json({errors:errors.array()});
    }

    const {fullname,email,password}=req.body;

    const hashedpassword = await userModel.hashPassword(password);

    const user=await userservice.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedpassword
    });

    const token=user.generateAuthToken();

    res.status(201).json({token,user});

}

module.exports.loginUser=async(req,res,next)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }


    const {email,password}=req.body;
    
    const user=await userModel.findOne({email}).select('+password');

    if(!user){
        return res.status(404).json({message:"Invalid email or password"});
    }

    const isMatch=await user.comparePassword(password);

    if(!isMatch){
        return res.status(404).json({message:"Invalid email or password"});
    }
    const token=user.generateAuthToken();
    res.status(200).json({token,user});

}