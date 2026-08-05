import { useState, type ComponentType, type InputHTMLAttributes } from "react";
import Input from "./Input";
import { axiosInstace } from "../../utils/axiosInstance";
import { Lock, Mail, User, type LucideProps } from "lucide-react";

interface FormProps {
  type: "signup" | "login";
}

interface Data {
  name: string;
  email: string;
  password: string;
}

interface InputArr {
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  name: string;
  placeholder?: string;
  value?: InputHTMLAttributes<HTMLInputElement>["value"];
  icon: ComponentType<LucideProps>;
}

const Form = ({ type }: FormProps) => {
  const [data, setData] = useState<Data>({
    name: "",
    email: "",
    password: "",
  });

  const inputs: InputArr[] = [
    ...(type == "signup"
      ? [
          {
            type: "text",
            placeholder: "John Doe",
            name: "name",
            value: data.name,
            icon: User,
          },
        ]
      : []),
    {
      type: "email",
      placeholder: "john@example.com",
      name: "email",
      value: data.email,
      icon: Mail,
    },
    {
      type: "password",
      placeholder: "L@Dh*h2-nW>JPbG",
      name: "password",
      value: data.password,
      icon: Lock,
    },
  ];

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
      className="w-80 sm:w-105 md:w-130 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-secondary/20 px-8 py-10 flex flex-col"
      onSubmit={onSubmitHandler}
    >
      <h1 className="text-center text-4xl font-bold text-white">
        <p className="mt-2 mb-8 text-center text-gray-400">
          {type === "signup"
            ? "Create your account to continue"
            : "Sign in to your account"}
        </p>
      </h1>
      <hr className="w-full text-white/10 mb-5 mt-4" />

      {inputs.map((input) => {
        return (
          <Input
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={input.value}
            onChange={onChangeHandler}
            className={`${input.type == "password" ? "tracking-wide font-medium" : ""}`}
            label={true}
            icon={input.icon}
          />
        );
      })}
      <button
        type="submit"
        className="mt-4 w-full rounded-xl bg-secondary py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-secondary/40 active:scale-95"
      >
        {type == "signup" ? "Signup" : "Login"}
      </button>
    </form>
  );
};

export default Form;
