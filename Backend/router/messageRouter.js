import express from "express";
import { isAdminAutheticated } from "../middleware/auth.js";


import { getAllMessages, sendMeassage } from "../controller/messageController.js";
 const router=express.Router();



 router.post("/send",sendMeassage);

 router.get("/getall",isAdminAutheticated,getAllMessages);

export default router;