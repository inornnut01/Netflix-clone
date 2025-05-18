import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(ENV_VARS.MONG_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectMongoDB;