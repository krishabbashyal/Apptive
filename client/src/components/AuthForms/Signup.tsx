"use client";

import React from "react";
import OAuthProvider from "./OAuthProvider";
import AuthCard from "./AuthCard";
import { useRouter } from "next/navigation";

import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpSchema = z.object({
  firstName: z.string().min(2, "Must be at least 2 characters"),
  lastName: z.string().min(2, "Must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  termsAndConditions: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type SignUpSchemaType = z.infer<typeof signUpSchema>;

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    reset();
  };

  const router = useRouter();

  const inputFieldClasses =
    "h-10 w-full rounded border border-cadetGray bg-background pl-3 shadow placeholder:text-cadetGrayLight focus:outline-none focus:ring-1 focus:ring-accent";

    const inputFieldErrorClasses =
    "h-10 w-full rounded border border-bittersweetDark bg-background pl-3 shadow placeholder:text-cadetGrayLight focus:outline-none focus:ring-1 focus:ring-accent animate-shake";

  const errorMessageClasses = "text-bittersweetDark text-sm mt-1";

  return (
    <div className="mx-4 flex w-full max-w-[60rem] flex-row justify-between  rounded-xl border border-graySeperator bg-foreground lg:rounded-r-xl">
      <div className="hidden p-2 md:block lg:w-7/12">
        <AuthCard />
      </div>
      <div className="w-full lg:w-8/12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10"
        >
          <h1 className="text-left text-2xl font-medium sm:text-3xl">
            Create an account
          </h1>
          <p className="mt-2 text-sm sm:mt-4">
            Already have an account?{" "}
            <span className="cursor-pointer text-accent" onClick={() => router.push("/login")}>Log in</span>
          </p>
          <div>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <div className="flex w-full flex-col">
                {/* First Name Input */}
                <input
                  {...register("firstName")}
                  className={errors.firstName ? inputFieldErrorClasses : inputFieldClasses}
                  type="text"
                  placeholder="First name"
                />
                {errors.firstName && (
                  <p className={errorMessageClasses}>
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="flex w-full flex-col">
                {/* Last Name Input */}
                <input
                  {...register("lastName")}
                  className={errors.lastName ? inputFieldErrorClasses : inputFieldClasses}
                  type="text"
                  placeholder="Last name"
                />
                {errors.lastName && (
                  <p className={errorMessageClasses}>
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-y-4">
              <div>
                {/* Email Input */}
                <input
                  {...register("email")}
                  className={errors.email ? inputFieldErrorClasses : inputFieldClasses}
                  type="email"
                  placeholder="Email"
                />
                {errors.email && (
                  <p className={`${errorMessageClasses}`}>
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                {/* Password Input */}
                <input
                  {...register("password")}
                  type="password"
                  className={errors.password ? inputFieldErrorClasses : inputFieldClasses}
                  placeholder="Password"
                />
                {errors.password && (
                  <p className={errorMessageClasses}>
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-x-2">
            {/* Terms and Conditions Checkbox */}
            <input
              {...register("termsAndConditions")}
              className={`h-5 w-5 accent-accent rounded-md cursor-pointer ${errors.termsAndConditions ? "animate-shake" : ""}`}
              type="checkbox"
            />
            <p className={ errors.termsAndConditions ? "animate-shake text-bittersweetDark" : "text-cadetGrayLight"}>
              I agree to the{" "}
              <span className="cursor-pointer text-accent">
                Terms and Conditions
              </span>
            </p>
          </div>
          <button
            className="mt-6 h-12 rounded-md from-accent to-accentDark px-4 py-2 font-medium text-white enabled:bg-gradient-to-tr disabled:cursor-not-allowed disabled:bg-cadetGray sm:mt-8"
            disabled={isSubmitting}
          >
            Create account
          </button>
          <div className="relative mt-5 border-b border-cadetGray text-center text-sm">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-foreground px-3 text-white">
              Or register with
            </span>
          </div>
          <div className="mt-6 flex justify-center space-x-3">
            <OAuthProvider icon="/images/logos/google.png" label="Google" />
            <OAuthProvider icon="/images/logos/github.png" label="GitHub" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
