export interface ProductBase {
  title: string;
  description: string;
  stock: number;
  price: number;
  isAvalible: boolean;
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
