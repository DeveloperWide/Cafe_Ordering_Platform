import { useState, type ComponentType, type InputHTMLAttributes } from "react";
import { Lock, Mail, User, type LucideProps } from "lucide-react";
import { useAuth } from "./useAuth";

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

export const useForm = (type: "signup" | "login") => {
  const [data, setData] = useState<Data>({
    name: "",
    email: "",
    password: "",
  });

  const { login, signup } = useAuth();

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
    const { name, email, password } = data;

    if (type == "login") {
      login(email, password);
    } else {
      signup(name, email, password);
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  return { inputs, onSubmitHandler, onChangeHandler };
};
