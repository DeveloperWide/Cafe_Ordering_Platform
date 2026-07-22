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
  img: {
    url: string;
    public_id: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface UpdateProduct extends ProductBase {
  _id: string;
}

export interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "update" | "create";
  data: null | UpdateProduct;
}

export type handleModelOpenParams = Pick<ProductModalProps, "type" | "data">;
