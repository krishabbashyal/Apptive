"use client";

import React from "react";
import OAuthProvider from "./OAuthProvider";
import AuthCard from "./AuthCard";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpSchemaType } from "@/lib/schemas";
import { signupUser } from "@/app/(auth)/actions";
import CustomInput from "../Inputs/CustomInput";
import BackButton from "../UserInterface/BackButton";
import CustomButton from "../UserInterface/CustomButton";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpSchemaType) => {
    try {
      await signupUser(data);
    } catch (error) {
      // Handle specific error cases
      // setError("root", {
      //   message: "Failed to signup. Please try again."
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
            Create an account
          </h1>
          <p className="mt-2 text-sm sm:mt-4">
            Already have an account?{" "}
            <span className="cursor-pointer text-accent">
              <Link href={"/login"}>Log in</Link>
            </span>
          </p>

          <div className="mt-6 sm:flex-row">
            <div className="flex w-full flex-row gap-x-4">
              <CustomInput
                label="First name"
                id="firstName"
                type="text"
                register={register("firstName")}
                error={errors.firstName}
              />
              <CustomInput
                label="Last name"
                id="lastName"
                type="text"
                register={register("lastName")}
                error={errors.lastName}
              />
            </div>
            <div className="mt-5 flex flex-col gap-y-5">
              <CustomInput
                label="Email address"
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
            label="Create account"
            isSubmitting={isSubmitting}
            submittingText="Creating account..."
            customClasses="mt-4 h-12 rounded-md from-accent to-accent px-4 py-2 font-medium text-white transition-all duration-200 enabled:bg-gradient-to-tr hover:enabled:opacity-90 disabled:cursor-not-allowed disabled:bg-spacer"
          />

          <div className="relative mt-5 border-b border-spacer text-center text-sm">
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
