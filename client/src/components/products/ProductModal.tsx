import Modal from "../Modal";
import Input from "../auth/Input";
import { useProductModal } from "../../hooks/useProductModal";
import type { ProductModalProps } from "../../types/products.types";

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
