import { useEffect } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { useState, ChangeEvent } from "react";
import { Eye, EyeSlash } from "@phosphor-icons/react";

interface CustomInputProps {
  label: string;
  id: string;
  type?: string;
  register: UseFormRegisterReturn;
  numeric?: boolean;
  error?: FieldError;
  defaultValue?: string
}

const CustomInput = ({
  label,
  id,
  type = "text",
  register,
  numeric = false,
  error,
  defaultValue = ""
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [displayValue, setDisplayValue] = useState(defaultValue);

  useEffect(() => {
    if (numeric) {
      setDisplayValue(formatNumber(defaultValue.replace(/,/g, '')));
    } else {
      setDisplayValue(defaultValue);
    }
  }, [defaultValue, numeric]);

const formatNumber = (value: string) => {
  const formattedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return formattedValue;
};


const handleNumericChange = (e: ChangeEvent<HTMLInputElement>) => {
  if (e.target.value.length <= 8) {
    const inputValue = e.target.value;
    

    const numericInput = inputValue.replace(/[^0-9]/g, '').replace(/^0+/, '');
    
    setDisplayValue(formatNumber(numericInput));
    
    if (register.onChange) {
      register.onChange({
        ...e,
        target: {
          ...e.target,
          value: numericInput // Send unformatted value to react hookform
        }
      });
    }
  }
};

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
          value={numeric ? displayValue : undefined}
          onChange={numeric ? handleNumericChange : register.onChange}
          className={`mt-4 h-10 w-full rounded border bg-background pl-3 shadow placeholder:text-spacer focus:outline-none focus:ring-1 focus:ring-accent ${
            error ? "border-danger" : "border-spacer"
          } ${type === "number" || numeric ? "remove-arrow" : ""} `}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[1.55rem] text-spacer cursor-pointer z-10"
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