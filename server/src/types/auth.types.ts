import { IUserDocument } from "./user.types";

export type LoginReqBody = Pick<IUserDocument, "email" | "password">;
export type SignupReqBody = Pick<
  IUserDocument,
  "name" | "email" | "password" | "phone"
>;
