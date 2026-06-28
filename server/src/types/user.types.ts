interface User {
  name: string;
  email: string;
  password: string;
}

export type LoginReqBody = Pick<User, "email" | "password">;
export type SignupReqBody = User;
