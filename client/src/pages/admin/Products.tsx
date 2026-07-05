import { Pencil, Plus, Trash } from "lucide-react";
import { useState } from "react";
import ProductModel from "../../components/products/ProductModel";

const Products = () => {
  const [open, setOpen] = useState<boolean>(false);

  const openModel = () => {
    setOpen(() => !open);
  };

  return (
    <div>
      <header className="my-2 flex justify-between mx-5">
        <ProductModel isOpen={open} onClose={() => setOpen(!open)} />
        <h2 className="text-3xl font-semibold italic my-3">Products</h2>
        <button
          className="rounded-full cursor-pointer bg-gray-900 px-4"
          onClick={openModel}
        >
          <Plus />
        </button>
      </header>
      <hr className="w-full text-white/25" />
      <table className="w-[96%] my-3 mx-4 products_table rounded-2xl">
        <thead>
          <tr>
            <th>D</th>
            <th>U</th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Trash />
            </td>
            <td>
              <Pencil />
            </td>
            <td>Mobile Phone</td>
            <td>7000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Products;
