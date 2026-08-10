import type { Response } from "../types/auth.types";
import type { User } from "../types/user.types";
import { axiosInstace } from "../utils/axiosInstance";

export const loginUser = async (
  email: string,
  password: string,
): Promise<Response | null> => {
  try {
    const res = await axiosInstace.post("/auth/login", {
      email,
      password,
    });

    return res.data as Response;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const signupUser = async (
  name: string,
  email: string,
  password: string,
): Promise<Response | null> => {
  try {
    const res = await axiosInstace.post("/auth/signup", {
      name,
      email,
      password,
    });

    return res.data as Response;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getMe = async (): Promise<User | null> => {
  try {
    const res: Response = (await axiosInstace.get("/auth/me")).data;
    console.log("Response : ", res);

    return res.user as User;
  } catch (err) {
    console.log(err);
    return null;
  }
};
