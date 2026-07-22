import { Request } from "express";
import { IProduct } from "../types/product.types";

const allowedProperties = [
  "title",
  "description",
  "stock",
  "price",
  "isAvailable",
] as const;

type AllowedProperties = (typeof allowedProperties)[number];

export const filteredReqBody = (
  req: Request,
): Partial<Pick<IProduct, AllowedProperties>> => {
  const updates: Partial<Pick<IProduct, AllowedProperties>> = {};
  for (let property of allowedProperties) {
    if (req.body[property] !== undefined) {
      updates[property] = req.body[property];
    }
  }

  return updates;
};
