const express =require("express");
const Patient =require("../model/patients");
const router = express.Router();



router.post("/patient",async(req,res)=>{

    try {
        const addpatient =new Patient(req.body);
        addpatient.save()
        .then(item=>{
            res.send("item saved to database");
            console.log(addpatient)
        })
        .catch(err=>{
            res.status(400).send("unable to save to database")
        });

    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports = router;