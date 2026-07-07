import { useEffect, useState } from "react";
import Modal from "../Modal";
import Input from "../auth/Input";
import { axiosInstace } from "../../utils/axiosInstance";
import type { CreateProduct, UpdateProduct } from "../../types/products.types";

interface ProductModelProps {
  isOpen: boolean;
  onClose: () => void;
  type: "update" | "create";
  data: null | UpdateProduct;
}

const intialData: CreateProduct = {
  title: "",
  description: "",
  stock: 1,
  price: 0,
  isAvalible: true,
};

const ProductModel = ({ isOpen, onClose, type, data }: ProductModelProps) => {
  const [productData, setProductData] = useState<CreateProduct>(intialData);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (type == "update" && data) {
      setProductData({
        title: data.title,
        description: data.description,
        stock: data.stock,
        price: data.price,
        isAvalible: data.isAvalible,
      });
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
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", productData.title);
    formData.append("description", productData.description);
    formData.append("stock", productData.stock.toString());
    formData.append("price", productData.price.toString());
    formData.append("isAvalible", String(productData.isAvalible));

    if (file) {
      formData.append("img", file);
    }

    console.log(formData);

    axiosInstace
      .post("/product/", formData)
      .then((res) => {
        console.log(res);
        setProductData({
          title: "",
          description: "",
          stock: 1,
          price: 0,
          isAvalible: true,
        });
        setFile(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} title="Create Product">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-1 p-2">
          {/* Title */}
          <Input
            type="text"
            name="title"
            placeholder="Apple MacBook Air M2 chip"
            value={productData.title}
            onChange={onChange}
            style="bg-gray-70 border border-white/15"
            label={true}
          />

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>

            <textarea
              id="description"
              name="description"
              value={productData.description}
              onChange={onChange}
              rows={5}
              className="w-full rounded-lg border border-white/15 px-3 py-2 outline-none focus:border-white/30"
            />
          </div>

          {/* Stock & Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <Input
              type="number"
              name="stock"
              placeholder="Stock"
              value={productData.stock}
              onChange={onChange}
              style="bg-gray-70 border border-white/15 md:w-[80%]"
              label={true}
            />

            <Input
              type="number"
              name="price"
              placeholder="Price"
              value={productData.price}
              onChange={onChange}
              style="bg-gray-70 border border-white/15 md:w-[80%]"
              label={true}
            />
          </div>

          {/* Image */}
          <div className="flex flex-col gap-2">
            <label htmlFor="img" className="text-sm font-medium capitalize">
              Product Image :
            </label>
            <Input
              type="file"
              name="img"
              onChange={onChange}
              style="bg-gray-70 border border-white/15"
              label={false}
            />
          </div>

          {/* Availability */}
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={productData.isAvalible}
              onChange={onChange}
              name="isAvalible"
            />

            <span>Available</span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Create Product
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ProductModel;
