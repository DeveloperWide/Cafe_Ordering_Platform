import type React from "react";
import type { Product } from "../types/products.types";
import { axiosInstace } from "../utils/axiosInstance";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const res = await axiosInstace.get("/product/");
    const products: Product[] = res.data.products;

    return products;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const createProduct = async (
  formData: FormData,
): Promise<Product | null> => {
  try {
    const res = await axiosInstace.post("/product/", formData);
    const data: Product = res.data.data;

    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
  // .then(() => {
  //   setProductData({
  //     title: "",
  //     description: "",
  //     stock: 1,
  //     price: 0,
  //     isAvailable: true,
  //   });
  //   setFile(null);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
};

export const getProduct = async (id: string): Promise<Product | undefined> => {
  try {
    const res = await axiosInstace.get(`product/${id}`);
    const data: Product = res.data.product;

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updateProduct = (id: string, data: FormData) => {
  axiosInstace
    .put(`product/${id}`, data)
    .then((res) => {
      console.log("Product Updated Successfully");
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteProduct = (id: string) => {
  axiosInstace
    .delete(`product/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
