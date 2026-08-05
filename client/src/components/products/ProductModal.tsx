import Modal from "../Modal";
import Input from "../auth/Input";
import { useProductModal } from "../../hooks/useProductModal";
import type { ProductModalProps } from "../../types/products.types";
import {
  Captions,
  DollarSign,
  Image,
  IndianRupee,
  Layers,
  ReceiptText,
} from "lucide-react";

const ProductModal = ({ isOpen, onClose, type, data }: ProductModalProps) => {
  const { productData, onChange, handleSubmit } = useProductModal({
    isOpen,
    onClose,
    type,
    data,
  });

  const title = type == "create" ? "Create Product" : "Update Product Details";

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} title={title}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-1 p-2">
          {/* Title */}
          <Input
            type="text"
            name="title"
            placeholder="Apple MacBook Air M2 chip"
            value={productData.title}
            onChange={onChange}
            className="bg-gray-70 border border-white/15"
            label={true}
            icon={Captions}
          />

          {/* Description */}
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>

            <ReceiptText
              size={20}
              className="absolute left-2 top-1/4 -translate-y-1/2 text-gray-400"
            />

            <textarea
              id="description"
              name="description"
              value={productData.description}
              onChange={onChange}
              rows={6}
              placeholder="Describe your product, its features, and what makes it unique..."
              className="w-full rounded-xl border border-white/10 bg-white/5 py-2 ps-9 pe-3 text-white placeholder:text-gray-400 outline-none transition-all duration-300 hover:border-white/20 focus:border-secondary focus:bg-white/10 focus:ring-2 focus:ring-secondary/40"
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
              className="bg-gray-70 border border-white/15 md:w-[80%]"
              label={true}
              icon={Layers}
            />

            <Input
              type="number"
              name="price"
              placeholder="Price"
              value={productData.price}
              onChange={onChange}
              className="bg-gray-70 border border-white/15 md:w-[80%]"
              label={true}
              icon={IndianRupee}
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
              className="bg-gray-70 border border-white/15"
              label={false}
              icon={Image}
            />
          </div>

          {/* Availability */}
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={productData.isAvailable}
              onChange={onChange}
              name="isAvailable"
            />

            <span>Available</span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            {title}
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ProductModal;
