
import mongoose from 'mongoose';

let appointmentSchema = new mongoose.Schema({
    id:{
        type:String,
        required:[true,'Patient id cannot be empty'],
        unique:true
    },
    sno:{
        type:String,
        required:[true,'Patient name cannot be empty']
    },
    time:{
        type:String,
        required:[true,'Gender cannot be empty'],
        enum:['m','f']
    },
    description:{
        type: Date,
      default: Date.now
    }
  });















