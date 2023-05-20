const mongoose = require('mongoose');

let patientSchema = new mongoose.Schema({
    id:{
        type:Number,
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
    },
    phone:String
    ,
    patient:{
        type:mongoose.Schema.ObjectId,
        ref:'Appointment'
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  });

  const Patient = mongoose.model('Patient',patientSchema);

  module.exports = Patient;

