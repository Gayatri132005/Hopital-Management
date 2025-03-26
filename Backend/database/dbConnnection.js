import mongoose from "mongoose"


export const dbConnection =()=>{
    mongoose.connect(process.env.MANGO_URI,{
        dbName:"MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",

    }).then(()=>{
        console.log("conncted to database ")
    })
     .catch((err)=>{
        console.log(`some error occur during databse ${err}`)
     });
}