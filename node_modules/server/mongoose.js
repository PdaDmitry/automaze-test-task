import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGODB_URL;
const DB_NAME = process.env.MONGODB_DB;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: DB_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected ✅ (Database: ${DB_NAME})`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
