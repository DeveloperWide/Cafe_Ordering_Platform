import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;

  comparePassword: (entered: string) => Promise<boolean>;
}

export type LoginReqBody = Pick<IUser, "email" | "password">;
export type SignupReqBody = Pick<IUser, "name" | "email" | "password">;
