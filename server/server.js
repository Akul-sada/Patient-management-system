import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/patientsRoutes.js';
// import express, { Router } from 'express';
import Patient from './model/patients.js';

// import cors from 'cors';
const app = express();

// const dotenv =require('dotenv');
// const app = require('./app');
// const router = require('./routes/test');
dotenv.config({path:'./config.env'});

const URI =process.env.DATABASE_ATLAS.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);


// Database connection
mongoose.connect(URI);
const db= mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function callback(){
    console.log("Database connected successfully...")
});

// Start the server
// app.get('/',(req,res)=>{
//     res.status(200).json({message:"Hello from server side",app:"PatientCarePlus"});
// });

// const testPatient = new Patient({
//     id:1,
//     name:'Sadananda',
//     gender:'m',
//     phone:'8970289151'
// });
// testPatient
// .save()
// .then(doc=>{
//     console.log(doc);
// })
// .catch(err=>{
//     console.log('error:😯',err);
// });


// app.use(router);

const port =process.env.PORT ;
const server = app.listen(port,()=>{
    console.log(`App running on port ${port}...`);
});
