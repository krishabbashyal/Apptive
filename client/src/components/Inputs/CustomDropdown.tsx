import React from "react";

import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface CustomDropdownProps {
  label: string;
  id: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  className?: string;
  errorClassName?: string;
  options: {
    value: string;
  }[];
}

const CustomDropdown = ({
  label,
  id,
  register,
  error,
  className = "",
  errorClassName = "",
  options,
}: CustomDropdownProps) => {
  return (
    <div className="flex relative flex-col">
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
      <div className="relative">
        <select
          {...register}
          id={id}
          className={`h-10 w-full rounded border bg-background pl-3 shadow focus:outline-none focus:ring-1 focus:ring-accent mt-4  ${error ? "border-danger" : "border-spacer"} `}
        >
          <option value="" selected hidden disabled>
            Select
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>

      </div>
      {error && (
        <p className={`mt-1 text-sm text-danger ${errorClassName} `}>
          {error.message}
        </p>
      )}
    </div>
  );
};

export default CustomDropdown;
