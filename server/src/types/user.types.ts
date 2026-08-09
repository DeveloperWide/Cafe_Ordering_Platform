import { Document, Types } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  phone?: number;

  role: "customer" | "admin" | "restaurantAdmin";

  profileImage?: {
    url: string;
    publicId: string;
  };

  createdAt: Date;
  updatedAt: Date;
}

export interface IUserDocument extends IUser, Document {
  password: string;

  comparePassword: (candidatePassword: string) => Promise<Boolean>;
}

export interface LoginReqBody {
  email: string;
  password: string;
}
export interface SignupReqBody {
  name: string;
  email: string;
  password: string;
}
