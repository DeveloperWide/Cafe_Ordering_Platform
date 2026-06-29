import { Document } from "mongoose";

export interface IProduct extends Document {
  title: string;
  description: string;
  img: [string];
  stock: number;
  price: number;
  isAvalible: boolean;
}

export type createProductReqBody = IProduct;
export type updateProductReqBody = IProduct;
