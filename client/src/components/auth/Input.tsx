import { type InputHTMLAttributes } from "react";

interface InputProps {
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  name: string;
  placeholder: string;
}

const Input = ({ type, name, placeholder }: InputProps) => {
  return (
    <div className="my-3 mx-4">
      <label htmlFor={name} className="capitalize text-sm md:text-lg">
        {name} :{" "}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        autoComplete="off"
        className="w-[65%] mx-1 sm:w-[80%] lg:mx-2 px-2 py-2 rounded-2xl border border-gray-900/70 text-secondary outline-none"
      />
    </div>
  );
};

export default Input;
