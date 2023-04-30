import dotenv from 'dotenv';
import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

// const dotenv =require('dotenv');
// const app = require('./app');
// const router = require('./routes/test');
const app = express();
dotenv.config({path:'./config.env'});
const mongoose = require('mongoose');
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json({message:"Hello from server side",app:"PatientCarePlus"});
});
app.use(cors());


const port =process.env.PORT || 8081;
const server = app.listen(port,()=>{
    console.log(`App running on port ${port}...`);
});