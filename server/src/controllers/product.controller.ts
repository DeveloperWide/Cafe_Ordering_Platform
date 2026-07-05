import { Request, Response } from "express";
import Product from "../models/product.model";
import { createProductReqBody } from "../types/product.types";
import { validateProductReqBody } from "../services/product.services";
import { Rewind } from "lucide-react";

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find();

  return res.status(200).json({
    message: "All products",
    products,
  });
};

export const createProduct = async (req: Request, res: Response) => {
  console.log(req.body);
  console.log(req.file);
  // const { title, description, stock, price, img, isAvalible }: any = req.body;

  // validateProductReqBody(res, req.body);

  // const product = new Product({
  //   title,
  //   description,
  //   stock,
  //   price,
  //   img,
  //   isAvalible,
  // });

  // const svdProduct = await product.save();

  // return res.status(201).json({
  //   message: "Product Created Successfully",
  //   product: svdProduct,
  // });
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
