import type { Response } from "../types/auth.types";
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
