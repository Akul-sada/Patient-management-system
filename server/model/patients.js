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
    age:{
        type:Number,
        required:[true,'age cannot be empty']
    },
    gender:{
        type:String,
        required:[true,'Gender cannot be empty'],
        enum:['m','f']
    },
    phone:String
    ,
    place:{
        type:String,
        required:[true,'place cannot be empty']
    },
    patientsAppointments:{
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

