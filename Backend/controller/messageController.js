import {Message} from "../models/messageSchema.js"
import { catchAsyncError } from "../middleware/catchAsyncError.js";
import ErrorHandler from "../middleware/errorMiddleware.js";

export  const sendMeassage=catchAsyncError(async(req,res,next)=>{
    const {firstName ,lastName,message,email,phone}=req.body;
    if(!firstName || !lastName || !message ||!email || !phone){
        return next(new ErrorHandler("Please Fill  Full Form  ",400))
    }
    await  Message.create({firstName ,lastName,message,email,phone});
         res.status(200).json({
            success:true,
            message:"Message Send Successfully",

         });

    });




     export const getAllMessages=catchAsyncError(async(req,res,next)=>{
         const messages= await Message.find();
         res.status(200).json({
             success:true,
             messages,
             
         })
     })