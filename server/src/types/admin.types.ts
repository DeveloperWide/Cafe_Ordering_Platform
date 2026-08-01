export interface IAdmin {
  _id: string;

  name: string;
  email: string;
  password: string;

  role: "admin";

  permissions: {
    restaurants: boolean;
    users: boolean;
    products: boolean;
    orders: boolean;
    analytics: boolean;
    settings: boolean;
  };

  createdAt: Date;
  updatedAt: Date;

  comparePassword: () => Promise<boolean>;
}
