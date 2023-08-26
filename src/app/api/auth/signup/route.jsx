import { NextResponse } from "next/server";
import { connectMongoDb } from "../lib/dbConnect";
import User from "@/models/UserModel";
import { validateEmail, validatePassword } from "@/utils/validation";

export async function POST(request) {
  try {
    const { email, name, password } = await request.json();

    // check inputs availabilty
    if (!email || !name || !password) {
      return NextResponse.json(
        { message: "Please fill all data" },
        { status: 400 }
      );
    }

    // validate email
    if (!validateEmail(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email" },
        { status: 400 }
      );
    }

    // check if that email already in database
    const isExist = await User.findOne({ email });
    if (isExist) {
      return NextResponse.json(
        { message: `${email} is already exist` },
        { status: 400 }
      );
    }

    // validate password
    if (!validatePassword(password)) {
      return NextResponse.json(
        {
          message:
            "Password must contain at least 6 characters that include at least 1 lowercase char, 1 uppercase char, i number",
        },
        { status: 400 }
      );
    }

    await connectMongoDb();
    return NextResponse.json({ message: "db connected" }, { status: 200 });
  } catch (error) {
    NextResponse.json({ message: error.message }, { status: 500 });
  }
}
