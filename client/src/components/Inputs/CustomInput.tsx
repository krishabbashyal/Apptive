import { FieldError, UseFormRegisterReturn } from "react-hook-form";

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
  return (
    <div className="group relative w-full">
      <div className="relative">
        <label
          htmlFor={id} className={error ? "absolute text-danger animate-shake -top-2.5" : "absolute -top-2.5"}>
          {label}
        </label>
        <input
          {...register}
          type={type}
          id={id}
          placeholder=" "
          className={error ? "h-10 w-full rounded border border-danger bg-background pl-3 shadow placeholder:text-spacer focus:outline-none focus:ring-1 focus:ring-accent animate-shake mt-4" : "h-10 w-full rounded border border-spacer bg-background pl-3 shadow placeholder:text-spacer focus:outline-none focus:ring-1 focus:ring-accent mt-4"}
        />
      </div>
      {error && <p className="mt-1 text-sm text-danger animate-shake">{error.message}</p>}
    </div>
  );
};

export default CustomInput;
