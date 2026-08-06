import Input from "./Input";
import { Link } from "react-router";
import { useForm } from "../../hooks/useForm";

interface FormProps {
  type: "signup" | "login";
}

const Form = ({ type }: FormProps) => {
  const { inputs, onSubmitHandler, onChangeHandler } = useForm(type);

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

      {inputs.map((input, idx) => {
        return (
          <Input
            key={idx}
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
      <div className="flex justify-center items-center text-gray-400 font-semibold">
        {type == "signup" ? (
          <p>
            Already have an Account ?{" "}
            <Link
              to={"/cafe/auth/login"}
              className="text-blue-300 hover:text-blue-400"
            >
              Login here
            </Link>
            .
          </p>
        ) : (
          <p>
            Don't have an Account ?{" "}
            <Link
              to={"/cafe/auth/signup"}
              className="text-blue-300 hover:text-blue-400"
            >
              Sign Up
            </Link>
            .
          </p>
        )}
      </div>
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
