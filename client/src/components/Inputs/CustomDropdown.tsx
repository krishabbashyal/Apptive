import React from "react";
import { CaretDown } from "@phosphor-icons/react";

import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface CustomDropdownProps {
  label: string;
  id: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  options: {
    value: string;
    default?: boolean;
  }[];
}

const CustomDropdown = ({
  label,
  id,
  register,
  error,
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
            <option key={option.value} selected={option.default} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
        <div 
          className="
            pointer-events-none 
            absolute 
            top-7
            right-0 
            pr-3 
        
          "
        >
          <CaretDown size={16} />
        </div>

      </div>
      {error && (
        <p className={`mt-1 text-sm text-danger animate-shake`}>
          {error.message}
        </p>
      )}
    </div>
  );
};

export default CustomDropdown;
