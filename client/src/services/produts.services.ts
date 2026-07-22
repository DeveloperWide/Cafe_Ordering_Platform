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
}: createProductParams) => {
  axiosInstace
    .post("/product/", formData)
    .then(() => {
      setProductData({
        title: "",
        description: "",
        stock: 1,
        price: 0,
        isAvailable: true,
      });
      setFile(null);
    })
    .catch((err) => {
      console.log(err);
    });
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
