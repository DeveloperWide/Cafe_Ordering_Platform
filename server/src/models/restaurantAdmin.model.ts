import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import { IRestaurantAdminDocument } from "../types/restaurantAdmin.types";

const restaurantAdminSchema = new Schema<IRestaurantAdminDocument>(
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

    role: {
      type: String,
      enum: ["customer", "admin", "restaurantAdmin"],
      default: "restaurantAdmin",
    },

    password: {
      type: String,
      required: true,
    },

    permissions: {
      products: true,
      orders: true,
      employees: true,
      analytics: true,
    },
  },
  { timestamps: true },
);

restaurantAdminSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 12);
});

restaurantAdminSchema.methods.comparePassword = async function (
  entered: string,
): Promise<boolean> {
  return await bcrypt.compare(entered, this.password);
};

const RestaurantAdmin = model<IRestaurantAdminDocument>(
  "RestaurantAdmin",
  restaurantAdminSchema,
);

export default RestaurantAdmin;
