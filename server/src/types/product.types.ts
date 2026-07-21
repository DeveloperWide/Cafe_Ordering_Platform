import { Document } from "mongoose";

export interface IProduct extends Document {
  title: string;
  description: string;
  img: string[];
  stock: number;
  price: number;
  isAvailable: boolean;
}

export type createProductReqBody = Exclude<IProduct, "img">;
export type updateProductReqBody = Exclude<IProduct, "img">;
