import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: "HireSphere"
    })
    .then(() => {
      console.log("Connected to MongoDB Atlas.");
    })
    .catch((err) => {
      console.log(`MongoDB connection error: ${err}`);
      process.exit(1);
    });
};