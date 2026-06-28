import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 15,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/,
        "Enter Valid Email",
      ],
    },
    password: {
      type: String,
      minLength: 6,
      maxLength: 30,
      required: true,
    },
  },
  { timestamps: true },
);

const User = model("User", userSchema);

export default User;
