export interface IRestaurantAdmin {
  _id: string;

  name: string;
  email: string;
  password: string;

  role: "restaurantAdmin";

  restaurantId: string;

  permissions: {
    products: boolean;
    orders: boolean;
    employees: boolean;
    analytics: boolean;
  };

  createdAt: string;
}
