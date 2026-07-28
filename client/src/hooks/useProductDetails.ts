import { useCallback, useEffect, useState } from "react";
import type { Product } from "../types/products.types";
import { getProduct } from "../services/produts.services";

export function useProductDetails(id?: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProduct = useCallback(async () => {
    if (!id) return;

    try {
      setLoading(true);
      setError(null);

      const data = await getProduct(id);
      setProduct(data ?? null);
    } catch (err) {
      setError("Failed to fetch Product Details");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return { refetch: fetchProduct, product, error, loading };
}
