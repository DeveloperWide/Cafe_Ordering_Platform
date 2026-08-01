export interface IUser {
  _id: string;

  name: string;
  email: string;
  password: string;
  phone?: number;

  role: "customer";

  profileImage?: {
    url: string;
    publicId: string;
  };

  createdAt: Date;
  updatedAt: Date;

  comparePassword: (entered: string) => Promise<boolean>;
}

export type LoginReqBody = Pick<IUser, "email" | "password">;
export type SignupReqBody = Pick<IUser, "name" | "email" | "password">;
