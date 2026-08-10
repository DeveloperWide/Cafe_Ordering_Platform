import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import ProductCard from "../../components/products/ProductCard";
import { useAuth } from "../../hooks/useAuth";

const Products = () => {
  const products = useSelector((state: RootState) => state.product.products);
  const { logout } = useAuth();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gapy-y-7 m-10">
      {products.map((product) => {
        return <ProductCard key={product._id} data={product} />;
      })}

      <button
        onClick={() => logout()}
        className="px-3 py-2 rounded text-white bg-red-600 font-semibold"
      >
        Logout
      </button>
    </div>
  );
};

export default Products;
