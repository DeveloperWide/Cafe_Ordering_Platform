import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import { IUser } from "../types/user.types";

const userSchema = new Schema<IUser>(
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
      match: [/^\S+@\S+\.\S+$/, "Enter Valid Email"],
    },
    password: {
      type: String,
      required: true,
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

const User = model<IUser>("User", userSchema);

export default User;
