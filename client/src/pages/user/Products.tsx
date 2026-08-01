import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import ProductCard from "../../components/products/ProductCard";

const Products = () => {
  const products = useSelector((state: RootState) => state.product.products);

  console.log(products);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gapy-y-7 m-10">
      {products.map((product) => {
        return <ProductCard data={product} />;
      })}
    </div>
  );
};

export default Products;
