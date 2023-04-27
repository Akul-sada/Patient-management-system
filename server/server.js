const dotenv =require('dotenv');
const app = require('./app');
const router = require('./routes/test');


dotenv.config({path:'./config.env'});

app.get('/',(req,res)=>{
    res.status(200).json({message:"Hello from server side",app:"PatientCarePlus"});
});



const port =process.env.PORT || 3000;
const server = app.listen(port,()=>{
    console.log(`App running on port ${port}...`);
});