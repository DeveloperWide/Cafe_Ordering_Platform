import { Types } from "mongoose";
import { Document } from "mongoose";

export interface IProduct {
  title: string;
  description: string;
  img: {
    url: string;
    public_id: string;
  };
  stock: number;
  price: number;
  isAvailable: boolean;
}

export interface IProductDocument extends IProduct, Document {}

export type createProductReqBody = Exclude<IProduct, "img">;
export type updateProductReqBody = Exclude<IProduct, "img">;
