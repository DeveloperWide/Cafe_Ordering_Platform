import { type InputHTMLAttributes } from "react";
import type { ChangeEvent, ComponentType } from "react";
import type { LucideProps } from "lucide-react";

interface InputProps {
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  name: string;
  placeholder?: string;
  value?: InputHTMLAttributes<HTMLInputElement>["value"];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label?: boolean;
  icon: ComponentType<LucideProps>;
}

const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  className,
  label = true,
  icon: Icon,
}: InputProps) => {
  return (
    <div className="mb-5">
      {label && (
        <label
          htmlFor={name}
          className="mb-2 block text-sm font-medium text-gray-300 capitalize"
        >
          {name}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <Icon
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
        )}

        <input
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete="off"
          className={`w-full rounded-xl border border-white/10 bg-white/5 py-3 text-white placeholder:text-gray-400 outline-none transition-all duration-300 hover:border-white/20 focus:border-secondary focus:bg-white/10 focus:ring-2 focus:ring-secondary/40 ${Icon ? "pl-12 pr-4" : "px-4"} ${className}`}
        />
      </div>
    </div>
  );
};

export default Input;
