"use client";

import React from "react";
import OAuthProvider from "./OAuthProvider";
import AuthCard from "./AuthCard";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { logInSchema, LogInSchemaType } from "@/lib/schemas";
import { loginUser } from "@/app/(auth)/actions";
import CustomInput from "../Inputs/CustomInput";
import BackButton from "../UserInterface/BackButton";
import CustomButton from "../UserInterface/CustomButton";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    // setError
  } = useForm<LogInSchemaType>({
    resolver: zodResolver(logInSchema),
  });

  const onSubmit = async (data: LogInSchemaType) => {
    try {
      await loginUser(data);
    } catch (error) {
      // Handle specific error cases
      // setError("root", {
      //   message: "Failed to login. Please try again."
      // });
    }
  };

  return (
    <div className="flex w-full max-w-[60rem] flex-row justify-between rounded-xl border-spacer bg-foreground md:mx-4 md:border lg:rounded-r-xl">
      <div className="absolute ml-4 mt-4">
        <BackButton />
      </div>
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
            Log in to your account
          </h1>
          <p className="mt-2 text-sm sm:mt-4">
            {"Don't have an account?"}{" "}
            <span className="cursor-pointer text-accent">
              <Link href={"/signup"}>Sign up</Link>
            </span>
          </p>
          <div>
            <div className="mt-6 flex flex-col gap-y-5">
              <CustomInput
                label="Email"
                id="email"
                type="email"
                register={register("email")}
                error={errors.email}
              />
              <CustomInput
                label="Password"
                id="password"
                type="password"
                register={register("password")}
                error={errors.password}
              />
            </div>
          </div>
          <CustomButton
            label="Log in"
            isSubmitting={isSubmitting}
            submittingText="Logging in..."
            customClasses="mt-4 h-12 rounded-md bg-accent px-4 py-2 font-medium text-white transition-all duration-200 disabled:cursor-not-allowed disabled:bg-spacer"
          />

          {errors.root && (
            <p className="mt-2 text-sm text-red-500">{errors.root.message}</p>
          )}

          <div className="relative mt-5 border-b border-spacer text-center text-sm">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-foreground px-3 text-white">
              Or log in with
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

export default LoginForm;
