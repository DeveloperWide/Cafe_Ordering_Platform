import { Request, Response } from "express";
import Product from "../models/product.model";
import { createProductReqBody } from "../types/product.types";
import { validateProductReqBody } from "../services/product.services";
import { uploadImage } from "../utils/uploadImage";

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find();

  return res.status(200).json({
    message: "All products",
    products,
  });
};

export const createProduct = async (
  req: Request<{}, {}, createProductReqBody>,
  res: Response,
) => {
  console.log("Creating Product...", req.body);
  try {
    validateProductReqBody(res, req.body);
    if (!req.file) {
      return res.status(400).json({
        message: "Product image is required",
      });
    }

    console.log("...Image Validation Passed...");

    const result = await uploadImage(req.file.buffer);
    console.log("result : ", result);

    if (!result)
      return res.status(500).json({ message: "Image Uploading Failed" });

    console.log("Saving Product");
    const product = await Product.create({
      ...req.body,
      img: [result?.secure_url],
    });
    console.log(product);
    console.log("Product Saved");

    return res.status(201).json({
      message: "Product Created Successfully",
      product,
    });
  } catch (err) {
    // TODOs
    /*
      1. add response for validation failure
      2. delete image from cloudinary if the product isn't saved
    */
    return res.status(500).json({
      message: "Internal Server error",
    });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).json({
      message: "ERROR: Product NOT Found",
    });
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    { ...req.body },
    { new: true, returnDocument: "after" },
  );

  return res.status(200).json({
    message: "Successfully Updated Product",
    updatedProduct,
  });
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  await Product.findByIdAndDelete(id);

  return res.status(200).json({
    message: "Product Deleted Successfully",
  });
};
