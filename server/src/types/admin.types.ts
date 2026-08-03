import { Document, ObjectId, Types } from "mongoose";
import { IUser } from "./user.types";

export interface IAdmin extends IUser {
  permissions: {
    restaurants: boolean;
    users: boolean;
    products: boolean;
    orders: boolean;
    analytics: boolean;
    settings: boolean;
  };
}

export interface IAdminDocument extends IAdmin, Document {
  password: string;

  comparePassword: (candidatePassword: string) => Promise<boolean>;
}
