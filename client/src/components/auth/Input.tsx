import { type InputHTMLAttributes } from "react";
import type { ChangeEvent } from "react";

interface InputProps {
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  name: string;
  placeholder?: string;
  value?: InputHTMLAttributes<HTMLInputElement>["value"];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label?: boolean;
}

const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  className,
  label = true,
}: InputProps) => {
  return (
    <div className="mx-2">
      {label && (
        <label htmlFor={name} className="text-sm font-medium capitalize">
          {name} :
        </label>
      )}

      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="off"
        className={`px-2 py-1 rounded-lg border border-gray-900/70 text-white focus:border-white/30 italic outline-none ${
          label ? "w-[75%] mx-0.5 sm:w-[90%]" : "w-full"
        } ${className ?? ""}`}
      />
    </div>
  );
};

export default Input;
