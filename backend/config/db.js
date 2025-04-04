import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:greatstack@cluster0.kn8gno6.mongodb.net/react').then(()=>console.log("DB Connected"));
}