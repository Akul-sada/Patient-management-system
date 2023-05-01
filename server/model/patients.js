import mongoose from 'mongoose';

let patientSchema = new mongoose.Schema({
    id:{
        type:String,
        required:[true,'Patient id cannot be empty'],
        unique:true
    },
    name:{
        type:String,
        required:[true,'Patient name cannot be empty']
    },
    gender:{
        type:String,
        required:[true,'Gender cannot be empty'],
        enum:['m','f']
    }
  });
