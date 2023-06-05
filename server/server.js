const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs')
const patientsRouter = require("./routes/patientsRoutes.js");
const appointmentsRouter= require("./routes/appointmentsRoutes.js");

const app = express();
app.use(express.json());


dotenv.config({path:'./config.env'});

const URI =process.env.DATABASE_ATLAS.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);


// Database connection
mongoose.connect(URI);
const db= mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function callback(){
    console.log("Database connected successfully...")
});



// use patients routes
app.use(patientsRouter);
// use appointment routes



const port =process.env.PORT ;
app.listen(port,()=>{
    console.log(`App running on port ${port}...`);
});
