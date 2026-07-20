export interface ProductBase {
  title: string;
  description: string;
  stock: number;
  price: number;
  isAvailable: boolean;
}

export interface CreateProduct extends ProductBase {}

export interface Product extends ProductBase {
  _id: string;
  img: string[];
  createdAt: string;
  updatedAt: string;
}

export interface UpdateProduct extends ProductBase {
  _id: string;
}

export interface ProductModelProps {
  isOpen: boolean;
  onClose: () => void;
  type: "update" | "create";
  data: null | UpdateProduct;
}

export type handleModelOpenParams = Pick<ProductModelProps, "type" | "data">;
