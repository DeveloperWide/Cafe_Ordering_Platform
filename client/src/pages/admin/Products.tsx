import { Pencil, Plus, Trash } from "lucide-react";
import ProductModel from "../../components/products/ProductModel";
import { deleteProduct } from "../../services/produts.services";
import { useProducts } from "../../hooks/useProducts";

const Products = () => {
  const { products, modal, openCreateModal, openUpdateModal, closeModal } =
    useProducts();
  return (
    <div>
      <header className="my-2 flex justify-between mx-5">
        <ProductModel
          isOpen={modal.open}
          onClose={closeModal}
          type={modal.type}
          data={modal.data}
        />
        <h2 className="text-3xl font-semibold italic my-3">Products</h2>
        <button
          className="rounded-full cursor-pointer bg-gray-900 px-4"
          onClick={openCreateModal}
        >
          <Plus />
        </button>
      </header>
      <hr className="w-full text-white/25" />
      <table className="w-full overflow-hidden border border-white/10 bg-[#161616]">
        <thead className="bg-[#202020] text-gray-300 uppercase text-xs tracking-wider">
          <tr>
            <th className="px-5 py-4 text-left">Product</th>
            <th className="px-5 py-4 text-center">Price</th>
            <th className="px-5 py-4 text-center">Stock</th>
            <th className="px-5 py-4 text-center">Status</th>
            <th className="px-5 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr
              key={product._id}
              className="border-t border-white/10 transition hover:bg-white/5"
            >
              {/* Product */}
              <td className="px-5 py-4">
                <div className="flex items-center gap-4">
                  <img
                    src={product.img[0]}
                    alt={product.title}
                    className="h-14 w-14 rounded-lg object-cover"
                  />

                  <div>
                    <h3 className="font-medium text-white">{product.title}</h3>

                    <p className="text-sm text-gray-400">
                      {product.description.slice(0, 40)}...
                    </p>
                  </div>
                </div>
              </td>

              {/* Price */}
              <td className="text-center font-semibold text-green-400">
                ₹{product.price}
              </td>

              {/* Stock */}
              <td className="text-center">{product.stock}</td>

              {/* Status */}
              <td className="text-center">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    product.isAvailable
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {product.isAvailable ? "Available" : "Out of Stock"}
                </span>
              </td>

              {/* Actions */}
              <td>
                <div className="flex items-center justify-center gap-3">
                  <button
                    className="rounded-lg p-2 transition hover:bg-blue-500/20"
                    onClick={() => openUpdateModal(product)}
                  >
                    <Pencil size={18} className="text-blue-400" />
                  </button>

                  <button
                    className="rounded-lg p-2 transition hover:bg-red-500/20"
                    onClick={() => {
                      deleteProduct(product._id);
                    }}
                  >
                    <Trash size={18} className="text-red-400" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
