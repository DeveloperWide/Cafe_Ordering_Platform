import { useState } from "react";
import type { UpdateProduct } from "../types/products.types";

export const useAdminModal = () => {
  const [modal, setModal] = useState<{
    open: boolean;
    type: "create" | "update";
    data: UpdateProduct | null;
  }>({
    open: false,
    type: "create",
    data: null,
  });

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

  return {
    modal,
    openCreateModal,
    closeModal,
    openUpdateModal,
  };
};
