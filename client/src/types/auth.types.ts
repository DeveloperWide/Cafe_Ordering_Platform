export interface Response {
  message: string;
  user: {
    _id: string;
    email: string;
    name: string;
    role: "customer" | "admin" | "restaurantAdmin";
  };
}
