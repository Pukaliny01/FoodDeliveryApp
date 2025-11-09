import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://YPukaliny:YPukal2001@cluster0.axfgs6a.mongodb.net/food_delivery_website').then(()=>console.log("DB Connected"));
}