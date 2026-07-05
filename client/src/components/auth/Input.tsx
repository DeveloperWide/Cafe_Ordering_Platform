import React, { type InputHTMLAttributes } from "react";

interface InputProps {
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  name: string;
  placeholder?: string;
  value?: InputHTMLAttributes<HTMLInputElement>["value"];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style: string;
  label: boolean;
}

const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  style,
  label,
}: InputProps) => {
  return (
    <div className="mx-2">
      {label && (
        <label htmlFor={name} className="text-sm font-medium capitalize">
          {name} :{" "}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        autoComplete="off"
        className={`px-2 py-1 rounded-lg border border-gray-900/70 text-white focus:border-white/30 italic outline-none ${style} ${label ? "w-[75%] mx-0.5 sm:w-[90%]" : "w-full"}`}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
