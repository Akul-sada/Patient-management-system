
const mongoose = require('mongoose');

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
    date:{
        type:Date,
        default:Date.now
    },
    gender:{
        type:String,
        required:[true,'Gender cannot be empty'],
        enum:['m','f']
    },
    description:{
        type: String
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  });

const Appointment = mongoose.model('Appointment',appointmentSchema);

module.exports = Appointment;













