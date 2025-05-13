import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://valusasindhu:sindhu8125@cluster0.0mmvdzk.mongodb.net/food-del');
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Failed", error);
    }
}
