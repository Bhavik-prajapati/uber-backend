const express = require('express');
require('dotenv').config();
const cors=require('cors');
const cookieParser=require('cookie-parser');
const connectDB=require('./db/db');
const userRoutes=require('./routes/user.routes');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
connectDB();


app.use(cors());
app.use("/users",userRoutes)

module.exports=app;


