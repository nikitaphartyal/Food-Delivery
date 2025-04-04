import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('Your mongodb').then(()=>console.log("DB Connected"));
}
