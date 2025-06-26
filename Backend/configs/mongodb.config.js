import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); //line number 6 should wait until 5 is completed//
        console.log("Connected to DB");
    } catch (error) {
        console.log("Failed to connect to DB",error);
    }
   
};
