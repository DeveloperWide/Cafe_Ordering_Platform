import { Types } from "mongoose";
import { IUser } from "./user.types";

export interface IRestaurantAdmin extends IUser {
  restaurantId: Types.ObjectId;

  permissions: {
    products: boolean;
    orders: boolean;
    employees: boolean;
    analytics: boolean;
  };
}

export interface IRestaurantAdminDocument extends IRestaurantAdmin, Document {
  password: string;

  comparePassword: (candidatePassword: string) => Promise<boolean>;
}
