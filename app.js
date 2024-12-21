const express = require('express');
require('dotenv').config();
const cors=require('cors');
const connectDB=require('./db/db');
const userRoutes=require('./routes/user.routes');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
connectDB();

app.use(cors());

app.use("/users",userRoutes)

module.exports=app;


