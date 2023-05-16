import express from "express";
import Patient from "../model/patients";
const router = express.Router();



router.get("/",(req,res)=>{
    console.log("connect")
});

export default router;