import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import { IUserDocument } from "../types/user.types";

const userSchema = new Schema<IUserDocument>(
  {
    name: {
      type: String,
      required: true,
      maxLength: 15,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Enter Valid Email"],
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["customer", "admin", "restaurantAdmin"],
      default: "customer",
    },

    phone: {
      type: Number,
      unique: true,
      minLength: 10,
    },

    profileImage: {
      url: String,
      publicId: String,
    },
  },
  { timestamps: true },
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 12);
});

userSchema.methods.comparePassword = async function (
  entered: string,
): Promise<boolean> {
  return await bcrypt.compare(entered, this.password);
};

const User = model<IUserDocument>("User", userSchema);

export default User;
