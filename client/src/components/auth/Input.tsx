import React, { type InputHTMLAttributes } from "react";

interface InputProps {
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  name: string;
  placeholder?: string;
  value?: InputHTMLAttributes<HTMLInputElement>["value"];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, name, placeholder, value, onChange }: InputProps) => {
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
        value={value}
        autoComplete="off"
        className="w-[65%] mx-1 sm:w-[80%] lg:mx-2 px-2 py-2 rounded-2xl border border-gray-900/70 text-secondary outline-none"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
