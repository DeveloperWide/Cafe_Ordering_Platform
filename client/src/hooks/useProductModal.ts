import { useEffect, useState } from "react";
import type { CreateProduct, ProductModalProps } from "../types/products.types";
import { createProduct, updateProduct } from "../services/produts.services";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/products/productSlice";

const intialData: CreateProduct = {
  title: "",
  description: "",
  stock: 1,
  price: 0,
  isAvailable: true,
};

export const useProductModal = ({
  isOpen,
  onClose,
  type,
  data,
}: ProductModalProps) => {
  const [productData, setProductData] = useState<CreateProduct>(intialData);
  const [file, setFile] = useState<File | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (type == "update" && data) {
      setProductData({
        title: data.title,
        description: data.description,
        stock: data.stock,
        price: data.price,
        isAvailable: data.isAvailable,
      });
    } else {
      setProductData(intialData);
      setFile(null);
    }
  }, [type, data, isOpen]);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target;
    const { name } = target;

    // File input
    if (target instanceof HTMLInputElement && target.type === "file") {
      setFile(target.files?.[0] ?? null);
      return;
    }

    // Checkbox
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setProductData((prev) => ({
        ...prev,
        [name]: target.checked,
      }));
      return;
    }

    // Number input
    if (target instanceof HTMLInputElement && target.type === "number") {
      setProductData((prev) => ({
        ...prev,
        [name]: Number(target.value),
      }));
      return;
    }

    // Text & textarea
    setProductData((prev) => ({
      ...prev,
      [name]: target.value,
    }));
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", productData.title);
    formData.append("description", productData.description);
    formData.append("stock", productData.stock.toString());
    formData.append("price", productData.price.toString());
    formData.append("isAvailable", String(productData.isAvailable));

    if (file) {
      formData.append("img", file);
    }

    if (type == "create") {
      const product = await createProduct(formData);

      if (product == null) {
        return;
      }

      onClose(!open);

      setProductData(intialData);
      setFile(null);

      dispatch(addProduct(product));
    } else if (data) {
      updateProduct(data._id, formData);
    }
  };

  return { onChange, handleSubmit, productData, file };
};
