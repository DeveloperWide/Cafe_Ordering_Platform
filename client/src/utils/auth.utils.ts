import { axiosInstace } from "./axiosInstance";

export const loginUser = (email: string, password: string) => {
  axiosInstace
    .post("/auth/login", { email, password })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signupUser = (name: string, email: string, password: string) => {
  axiosInstace
    .post("/auth/signup", { name, email, password })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
