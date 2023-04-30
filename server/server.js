import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
dotenv.config({path:'./config.env'});
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json({message:"Hello from server side",app:"PatientCarePlus"});
});
app.use(cors());


const port =process.env.PORT || 8081;
const server = app.listen(port,()=>{
    console.log(`App running on port ${port}...`);
});