const express =require("express");
const Patient =require("../model/patients");
const router = express.Router();



router.get("/",(req,res)=>{
    console.log("connect")
});

export default router;