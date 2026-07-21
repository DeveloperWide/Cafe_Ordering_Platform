import { useEffect, useState } from "react";
import type { Product, UpdateProduct } from "../types/products.types";
import { getProducts } from "../services/produts.services";

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

  return {
    products,
    modal,
    openCreateModal,
    closeModal,
    openUpdateModal,
  };
};
