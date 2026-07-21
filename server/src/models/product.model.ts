import { IProduct } from "../types/product.types";
import { Schema, model } from "mongoose";

const productSchema = new Schema<IProduct>(
  {
    title: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 50,
    },
    description: {
      type: String,
      required: true,
      maxLength: 5000,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    price: {
      type: Number,
      required: true,
      min: [0, `Price Can't Be Negative`],
    },
    img: [String],

    isAvailable: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true },
);

const Product = model<IProduct>("Product", productSchema);
export default Product;
