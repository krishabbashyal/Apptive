import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeSlash } from "@phosphor-icons/react";

interface CustomInputProps {
  label: string;
  id: string;
  type?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const CustomInput = ({
  label,
  id,
  type,
  register,
  error,
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <div className="relative">
        <label
          htmlFor={id}
          className={
            error
              ? "absolute -top-2.5 animate-shake text-danger"
              : "absolute -top-2.5"
          }
        >
          {label}
        </label>
        <input
          {...register}
          type={showPassword ? "text" : type}
          id={id}
          placeholder=" "
          className={`mt-4 h-10 w-full rounded border bg-background pl-3 shadow placeholder:text-spacer focus:outline-none focus:ring-1 focus:ring-accent ${
            error ? "border-danger" : "border-spacer"
          } ${type === "number" ? "remove-arrow" : ""} `}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[1.55rem] text-spacer cursor-pointer z-10" // Ensures it appears above the Bitwarden button
          >
            {showPassword ? <EyeSlash size={22} /> : <Eye size={22} />}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-1 animate-shake text-sm text-danger">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default CustomInput;
