import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../services/produts.services";
import { setProducts } from "../features/products/productSlice";
import { useEffect } from "react";
import type { RootState } from "../app/store";

export const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);

  const fetchProducts = async () => {
    try {
      const products = await getProducts();
      dispatch(setProducts(products));
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { refetch: fetchProducts, products };
};
