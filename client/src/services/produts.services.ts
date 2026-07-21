import type React from "react";
import type {
  CreateProduct,
  Product,
  UpdateProduct,
} from "../types/products.types";
import { axiosInstace } from "../utils/axiosInstance";

interface createProductParams {
  formData: FormData;
  setProductData: React.Dispatch<React.SetStateAction<CreateProduct>>;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

interface getProductsParams {
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const getProducts = ({ setProducts }: getProductsParams) => {
  axiosInstace
    .get("/product/")
    .then((res) => {
      setProducts(res.data.products);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createProduct = async ({
  formData,
  setProductData,
  setFile,
}: createProductParams): Promise<unknown> => {
  console.log(formData);
  try {
    const res = await axiosInstace.post("/product/", formData);
    setProductData({
      title: "",
      description: "",
      stock: 1,
      price: 0,
      isAvailable: true,
    });
    setFile(null);
    return res.data;
  } catch (err) {
    console.log(err);
  }
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

export const updateProduct = (id: string, data: UpdateProduct) => {
  console.log("Updating product Details");
  axiosInstace
    .put(`product/${id}`, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
