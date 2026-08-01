import { Schema, model } from "mongoose";
import { IRestaurant } from "../types/restaurant.types";

const restaurantSchema = new Schema<IRestaurant>(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    logo: {
      url: String,
      publicId: String,
    },

    banner: {
      url: String,
      publicId: String,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Enter Valid Email"],
    },

    phone: {
      type: Number,
      required: true,
      minLength: 10,
    },

    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      zipCode: String,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    admins: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    rating: {
      type: Number,
      default: 0,
    },

    totalReviews: {
      type: Number,
      default: 0,
    },

    isOpen: Boolean,
    isVerified: Boolean,
  },
  { timestamps: true },
);

const Restaurant = model("Restaurant", restaurantSchema);
export default Restaurant;
