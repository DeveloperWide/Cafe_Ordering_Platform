import { useEffect, useState } from "react";
import type {
  handleModelOpenParams,
  Product,
  UpdateProduct,
} from "../types/products.types";
import { axiosInstace } from "../utils/axiosInstance";
import { getProducts } from "../services/produts.services";
import ProductModel from "../components/products/ProductModel";

export const useProducts = () => {
  const [modal, setModal] = useState<{
    open: boolean;
    type: "create" | "update";
    data: UpdateProduct | null;
  }>({
    open: false,
    type: "create",
    data: null,
  });
  const [products, setProducts] = useState<Product[]>([]);

  const openCreateModal = () => {
    setModal({
      open: true,
      type: "create",
      data: null,
    });
  };

  const openUpdateModal = (product: UpdateProduct) => {
    setModal({
      open: true,
      type: "update",
      data: product,
    });
  };

  const closeModal = () => {
    setModal((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
  };

  useEffect(() => {
    getProducts({ setProducts });
  }, []);

  const handleModelOpen = ({ type, data }: handleModelOpenParams) => {
    if (type == "update") {
    }
  };

  return {
    products,
    modal,
    openCreateModal,
    closeModal,
    openUpdateModal,
  };
};
