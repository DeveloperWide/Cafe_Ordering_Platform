import { useEffect, useState } from "react";
import type { UpdateProduct } from "../types/products.types";
import { getProducts } from "../services/produts.services";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../features/products/productSlice";
import type { RootState } from "../app/store";

export const useAdminProducts = () => {
  const [modal, setModal] = useState<{
    open: boolean;
    type: "create" | "update";
    data: UpdateProduct | null;
  }>({
    open: false,
    type: "create",
    data: null,
  });
  const products = useSelector((state: RootState) => state.product.products);
  const dispatch = useDispatch();

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

  const fetchProducts = async () => {
    try {
      const products = await getProducts();
      dispatch(setProducts(products));
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    modal,
    openCreateModal,
    closeModal,
    openUpdateModal,
    refetch: fetchProducts,
  };
};
