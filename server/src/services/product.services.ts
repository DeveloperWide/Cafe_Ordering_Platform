import { Response } from "express";
import { createProductReqBody } from "../types/product.types";

export const validateProductReqBody = (
  res: Response,
  reqBody: createProductReqBody,
) => {
  const { title, description, stock, img, price, isAvalible } = reqBody;

  if (!title || !description || !stock || !img || !price || !isAvalible) {
    return res.status(400).json({
      message: "Validation Failed: All fields are required",
    });
  }
};
