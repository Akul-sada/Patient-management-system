const express = require("express");
const Appointment = require("../model/appointment");
const router = express.Router();

router.post("/addappointment",()=>{
    try{
        const addAppointment = new Appointment(req.body);
        addAppointment.save()
        .then(appointment=>{
            res.send("appointment saved to the database")
        })
        .catch(err=>{
            res.send("appointment not saved to the database");
        });
    }catch{

    }
});