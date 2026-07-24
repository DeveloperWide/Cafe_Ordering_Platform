import { Request, Response } from "express";
import Product from "../models/product.model";
import { createProductReqBody } from "../types/product.types";
import { validateProductReqBody } from "../services/product.services";
import { uploadImage } from "../utils/uploadImage";
import { filteredReqBody } from "../utils/filteredReqBody";
import { deleteOldImage } from "../utils/deleteOldImage";

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
      img: {
        url: result?.secure_url,
        public_id: result?.public_id,
      },
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

export const showProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({
      message: "ERROR: Product NOT Found",
    });
  }

  return res.status(200).json({
    message: "Product Details",
    product,
  });
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log("Updating Product");

  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).json({
      message: "ERROR: Product NOT Found",
    });
  }
  // console.log("product", product);
  console.log("Req Body :", req.body);

  const updates = filteredReqBody(req);
  // console.log("updates", updates);
  Object.assign(product, updates);
  // console.log("Product Updates", product);

  let updatedProduct;

  if (req.file) {
    await deleteOldImage(product.img.public_id);
    const result = await uploadImage(req.file?.buffer);

    if (!result) {
      return res.status(500).json({ message: "Image Uploading Failed" });
    }

    product.img = {
      url: result?.secure_url,
      public_id: result?.public_id,
    };

    updatedProduct = await product.save();
  }

  updatedProduct = await product.save();
  console.log(updatedProduct);

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
