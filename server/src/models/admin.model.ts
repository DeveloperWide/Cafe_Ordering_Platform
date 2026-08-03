import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import { IAdminDocument } from "../types/admin.types";

const adminSchema = new Schema<IAdminDocument>(
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

    role: {
      type: String,
      enum: ["customer", "admin", "restaurantAdmin"],
      default: "admin",
    },

    password: {
      type: String,
      required: true,
    },

    permissions: {
      restaurants: true,
      users: true,
      products: true,
      orders: true,
      analytics: true,
      settings: true,
    },
  },
  { timestamps: true },
);

adminSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 12);
});

adminSchema.methods.comparePassword = async function (
  entered: string,
): Promise<boolean> {
  return await bcrypt.compare(entered, this.password);
};

const Admin = model<IAdminDocument>("Admin", adminSchema);

export default Admin;
