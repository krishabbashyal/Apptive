"use client";

import React from "react";
import OAuthProvider from "./OAuthProvider";
import AuthCard from "./AuthCard";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { logInSchema, LogInSchemaType } from "@/lib/schemas";
import { loginUser } from "@/app/(auth)/actions";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LogInSchemaType>({
    resolver: zodResolver(logInSchema),
  });

  const onSubmit = async (data: LogInSchemaType) => {
    loginUser(data);
  };

  const inputFieldClass = "h-10 w-full rounded border border-cadetGray bg-background pl-3 shadow focus:outline-none focus:ring-1 focus:ring-accent mt-0.5";
  const inputFieldErrorClass = "h-10 w-full rounded border border-bittersweetDark bg-background pl-3 shadow focus:outline-none focus:ring-1 focus:ring-accent animate-shake mt-0.5";
  const errorMessageClass = "text-bittersweetDark text-sm mt-1";



  return (
    <div className="md:mx-4 flex w-full max-w-[60rem] flex-row justify-between rounded-xl md:border border-graySeperator bg-foreground lg:rounded-r-xl">
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
            <span className="cursor-pointer text-accent"><Link href={"/signup"}>Sign up</Link></span>
          </p>
          <div>
            <div className="mt-4 flex flex-col sm:flex-row">
           
            
            </div>
            <div className="flex flex-col gap-y-2">
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
                  id="password"
                  className={errors.password ? inputFieldErrorClass : inputFieldClass}
    
                />
                {errors.password && (
                  <p className={errorMessageClass}>
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        
          <button
            className="mt-6 h-12 rounded-md from-accent to-accentDark px-4 py-2 font-medium text-white enabled:bg-gradient-to-tr disabled:cursor-not-allowed disabled:bg-cadetGray sm:mt-8"
            disabled={isSubmitting}
          >
            Log in
          </button>
          <div className="relative mt-5 border-b border-cadetGray text-center text-sm">
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
