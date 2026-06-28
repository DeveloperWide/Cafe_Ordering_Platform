import { useState } from "react";
import Input from "./Input";
import { axiosInstace } from "../../utils/axiosInstance";

interface FormProps {
  type: "signup" | "login";
}

interface Data {
  name: string;
  email: string;
  password: string;
}

const Form = ({ type }: FormProps) => {
  const [data, setData] = useState<Data>({
    name: "",
    email: "",
    password: "",
  });

  const onSubmitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (type == "login") {
      console.log("login");
      const { email, password } = data;
      console.log(email, password);

      axiosInstace
        .post("/auth/login", { email, password })
        .then((res) => {
          console.log(res);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axiosInstace
        .post("/auth/signup", data)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  return (
    <form
      className="border border-white/15 rounded-2xl shadow shadow-xl/30 shadow-secondary px-3 py-8 flex flex-col justify-center w-80 md:w-xl lg:w-2xl"
      onSubmit={onSubmitHandler}
    >
      <h1 className="self-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
        {type == "signup" ? "Welcome on BrewCafe" : "Welcome Back on BrewCafe"}
      </h1>
      <hr className="w-full text-white/10 mb-5 mt-4" />
      {type == "signup" && (
        <Input
          type="text"
          name="name"
          placeholder="John doe"
          value={data.name}
          onChange={onChangeHandler}
        />
      )}
      <Input
        type="email"
        name="email"
        placeholder="support@focushub.co.in"
        value={data.email}
        onChange={onChangeHandler}
      />
      <Input
        type="password"
        name="password"
        placeholder="L@Dh*h2-nW>JPbG"
        value={data.password}
        onChange={onChangeHandler}
      />

      <button
        type="submit"
        className="self-end relative z-0 rounded font-semibold text-gray-950 bg-secondary/90 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-secondary cursor-pointer after:transition-[all_0.3s_ease]  hover:after:w-full mx-2 my-2 "
      >
        {type == "signup" ? "Signup" : "Login"}
      </button>
    </form>
  );
};

export default Form;
