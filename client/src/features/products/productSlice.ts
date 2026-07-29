import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/products.types";

export interface ProductsState {
  products: Product[] | null;
}

const initialState: ProductsState = {
  products: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    createProduct: (state) => {},
    updateProduct: (state) => {},
    removeProduct: (state) => {},
  },
});
