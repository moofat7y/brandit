import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: "Please enter your full name" },
    email: {
      type: String,
      requried: "Please enter your email",
      trim: true,
      unique: "This email has been already registered",
    },
    password: {
      type: String,
      required: "Please enter a password",
      select: false,
    },
    role: { type: String, default: "user", enum: ["user", "seller", "admin"] },
    image: { type: String, default: "...nn" },
    emailVerfied: { type: Boolean, default: false },
    paymentMethod: { type: String, default: "" },
    address: [
      {
        firstName: {
          type: String,
        },
        lastName: {
          type: String,
        },
        phoneNumber: {
          type: Number,
        },
        address1: {
          type: String,
        },
        address2: {
          type: String,
        },
        city: {
          type: String,
        },
        zipCode: {
          type: String,
        },
        state: {
          type: String,
        },
        country: {
          type: String,
        },
        active: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
