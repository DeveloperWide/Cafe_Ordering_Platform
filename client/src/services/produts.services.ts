import { axiosInstace } from "../utils/axiosInstance";

export const deleteProduct = (id: string) => {
  axiosInstace
    .delete(`product/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateProduct = (id: string, data) => {};
