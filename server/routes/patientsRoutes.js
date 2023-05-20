const express =require("express");
const Patient =require("../model/patients");
const router = express.Router();



router.post("/addpatient",async(req,res)=>{
    // console.log(req.body);
    const {name,email,age,mobile,work,add,desc} = req.body;
    
    
    
    if(!id || !name || !age || !gender){
        res.status(422).json("plz fill the data");
    }

    try {
        
        const patientName = await users.findOne({email:email});
        

        if(patientName){
            res.status(422).json("this is user is already present");
        }else{

            // Save data to database pending
        }

    } catch (error) {
        res.status(422).json(error);
    }
})

export default router;