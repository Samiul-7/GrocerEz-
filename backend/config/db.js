import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://teamp962:2022010407992@cluster0.3ystazy.mongodb.net/grocerez').then(()=>console.log(("DB Connected")));
}