import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type CustomDateInputProps = {
  label: string;
  id: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
};

const CustomDateInput = ({ label, id, register, error }: CustomDateInputProps) => {
  const today = new Date();
  const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000,
  )
    .toISOString()
    .substring(0, 10);

  return (
    <div className="group relative w-full">
      <div className="relative">
        <label
          htmlFor={id} className={error ? "absolute text-danger animate-shake -top-2.5" : "absolute -top-2.5"}>
          {label}
        </label>
        <input
          {...register}
          type="date"
          id={id}
          max={localDate}
          defaultValue={localDate}
          placeholder=" "
          className={`
            h-10 w-full rounded border pl-3 bg-background shadow placeholder:text-spacer 
            focus:outline-none focus:ring-1 focus:ring-accent 
            mt-4 
            ${error 
              ? 'border-danger' 
              : 'border-spacer'
            } 
          `}
        />
      </div>
      {error && (
        <p className={`mt-1 text-sm text-danger animate-shake`}>
          {error.message}
        </p>
      )}
    </div>
  );
};

export default CustomDateInput;