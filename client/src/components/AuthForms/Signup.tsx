"use client";

import React from "react";
import OAuthProvider from "./OAuthProvider";
import AuthCard from "./AuthCard";

import { FieldValues, useForm } from "react-hook-form";
const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    reset();
  };

  const inputFieldClasses =
    "h-10 w-full rounded border border-cadetGray bg-background pl-3 outline-2 outline-accent placeholder:text-white";

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-row justify-between rounded-xl border border-graySeperator bg-foreground lg:rounded-r-xl">
      <div className="hidden p-2 md:block lg:w-3/5">
        <AuthCard />
      </div>
      <div className="w-full lg:w-1/2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10"
        >
          <h1 className="text-left text-2xl font-medium sm:text-3xl">
            Create an account
          </h1>
          <p className="mt-2 text-sm sm:mt-4">
            Already have an account?{" "}
            <span className="cursor-pointer text-accent">Log in</span>
          </p>
          <div>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <div className="flex w-full flex-col">
                <input
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className={inputFieldClasses}
                  type="text"
                  placeholder="First name"
                />
              </div>
              <div className="flex w-full flex-col">
                <input
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  className={inputFieldClasses}
                  type="text"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-y-4">
              <input
                {...register("email", {
                  required: "Email is required",
                })}
                className={inputFieldClasses}
                type="email"
                placeholder="Email"
              />
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                type="password"
                className={inputFieldClasses}
                placeholder="Password"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-x-2">
            <input
              {...register("termsAndConditions", {
                required: "You must agree to the terms and conditions",
              })}
              className="h-5 w-5 cursor-pointer text-background accent-accent"
              type="checkbox"
            />
            <p className="text-sm">
              I agree to the{" "}
              <span className="cursor-pointer text-accent">
                Terms and Conditions
              </span>
            </p>
          </div>
          <button
            className="mt-6 h-12 rounded-md enabled:bg-gradient-to-tr from-accent to-accentDark px-4 py-2 font-medium text-white disabled:cursor-not-allowed disabled:bg-cadetGray sm:mt-8"
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
