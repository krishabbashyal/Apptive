"use client";

import React from "react";
import OAuthProvider from "./OAuthProvider";
import AuthCard from "./AuthCard";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpSchemaType } from "@/lib/schemas";
import { signupUser } from "@/app/(auth)/actions";


const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpSchemaType) => {
    signupUser(data);
  };

  const inputFieldClass = "h-10 w-full rounded border border-cadetGray bg-background pl-3 shadow placeholder:text-spacer focus:outline-none focus:ring-1 focus:ring-accent mt-0.5";
  const inputFieldErrorClass = "h-10 w-full rounded border border-bittersweetDark bg-background pl-3 shadow placeholder:text-spacer focus:outline-none focus:ring-1 focus:ring-accent animate-shake mt-0.5";
  const errorMessageClass = "text-bittersweetDark text-sm mt-1";

  return (
    <div className="md:mx-4 flex w-full max-w-[60rem] flex-row justify-between  rounded-xl md:border border-graySeperator bg-foreground lg:rounded-r-xl">
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
            <span className="cursor-pointer text-accent"><Link href={"/login"}>Log in</Link></span>
          </p>
          <div>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <div className="flex w-full flex-col">
                {/* First Name Input */}
                <label htmlFor="firstName">First name</label>
                <input
                  {...register("firstName")}
                  className={errors.firstName ? inputFieldErrorClass : inputFieldClass}
                  type="text"
                  id="firstName"

                />
                {errors.firstName && (
                  <p className={errorMessageClass}>
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="flex w-full flex-col">
                {/* Last Name Input */}
                <label htmlFor="lastName">Last name</label>
                <input
                  {...register("lastName")}
                  className={errors.lastName ? inputFieldErrorClass : inputFieldClass}
                  type="text"
                  id="lastName"
                />
                {errors.lastName && (
                  <p className={errorMessageClass}>
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-2 flex flex-col gap-y-2">
              <div>
                {/* Email Input */}
                <label htmlFor="email">Email</label>
                <input
                  {...register("email")}
                  className={errors.email ? inputFieldErrorClass : inputFieldClass}
                  type="email"

                  id="email"
                />
                {errors.email && (
                  <p className={`${errorMessageClass}`}>
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                {/* Password Input */}
                <label htmlFor="password">Password</label>
                <input
                  {...register("password")}
                  type="password"
                  className={errors.password ? inputFieldErrorClass : inputFieldClass}
    
                  id="password"
                />
                {errors.password && (
                  <p className={errorMessageClass}>
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col">
            {/* Terms and Conditions Checkbox */}
            <label htmlFor="termsAndConditions">Terms and Conditions</label>
            <div className="flex flex-row gap-x-2 mt-0.5 items-center">
              <input
                {...register("termsAndConditions")}
                className={`h-5 w-5 accent-accent rounded-md cursor-pointer ${errors.termsAndConditions ? "animate-shake" : ""}`}
                type="checkbox"
                id="termsAndConditions"
              />
              <p className={ errors.termsAndConditions ? "animate-shake text-bittersweetDark" : "text-spacer"}>
                I agree to the{" "}
                <span className="cursor-pointer text-accent">
                  Terms and Conditions
                </span>
              </p>
            </div>
          </div>
          <button
            className="mt-6 h-12 rounded-md from-accent to-accent px-4 py-2 font-medium text-white enabled:bg-gradient-to-tr disabled:cursor-not-allowed disabled:bg-cadetGray sm:mt-8"
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
