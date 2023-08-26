import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const connectMongoDb = async () => {
  try {
    await mongoose.connect(
      process.env.PROJECT_STATUS
        ? process.env.MONGODB_URI_DEV
        : process.env.MONGODB_URI
    );

    console.log("connected to db");
  } catch (error) {
    console.log("Erorr in connection : ", error);
    return NextResponse.json({ messgae: "An error occurred" }, { status: 500 });
  }
};
