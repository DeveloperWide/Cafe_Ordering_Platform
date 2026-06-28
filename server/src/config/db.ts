import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/brewcafe");
    console.log("Mongo Connection : ", conn.connection.host);
  } catch (err) {
    console.log("Mongo Error : ", err);
    process.exit(1);
  }
};
