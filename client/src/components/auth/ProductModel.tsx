import { useState } from "react";
import Modal from "../Modal";
import Input from "./Input";
import { axiosInstace } from "../../utils/axiosInstance";

interface Product {
  title: string;
  description: string;
  stock: number;
  price: number;
  isAvalible: boolean;
}

interface ProductModelProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProductModel = ({ isOpen, onClose }: ProductModelProps) => {
  const [productData, setProductData] = useState<Product>({
    title: "",
    description: "",
    stock: 1,
    price: 0,
    isAvalible: true,
  });
  const [file, setFile] = useState<File | null>(null);

  const addProduct = async () => {
    try {
      const res = await axiosInstace.post("/products/create", {
        ...productData,
        img: file,
      });
      const data = res.data;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (e.target instanceof HTMLInputElement && e.target.files) {
      setFile(e.target.files[0]);
    }

    setProductData(() => {
      return { ...productData, [name]: value };
    });
  };
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} title="Create Product Model">
        <form>
          <Input
            type="text"
            name="title"
            placeholder="Apple MacBook Air M2 chip"
            value={productData.title}
            onChange={onChange}
          />
          <div className="description">
            <label htmlFor="description">Description :</label>
            <textarea
              name="description"
              id="description"
              value={productData.description}
              onChange={onChange}
              rows={5}
              cols={10}
            ></textarea>
          </div>

          <Input
            type="number"
            name="stock"
            placeholder="5"
            value={productData.stock}
            onChange={onChange}
          />

          <Input
            type="number"
            name="price"
            placeholder="10000"
            value={productData.price}
            onChange={onChange}
          />

          <Input type="file" name="img" onChange={onChange} />

          <Input
            type="checkbox"
            name="isAvalible"
            value={productData.title}
            onChange={onChange}
          />

          <button
            className="px-3 py-2 rounded border border-white/20"
            onClick={addProduct}
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ProductModel;
