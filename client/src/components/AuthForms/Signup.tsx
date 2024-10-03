import React from "react";
import OAuthProvider from "./OAuthProvider";
import AuthCard from "./AuthCard";

const SignupForm = () => {
  return (
    <div className="flex flex-row justify-between rounded-xl lg:rounded-r-xl border border-graySeperator bg-foreground w-full max-w-4xl mx-auto">
      <div className="hidden md:block lg:w-3/5 p-2">
        <AuthCard />
      </div>
      <div className="w-full lg:w-1/2">
        <form className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col">
          <h1 className="text-left text-2xl sm:text-3xl font-medium">Create an account</h1>
          <p className="mt-2 sm:mt-4 text-sm">
            Already have an account?{" "}
            <span className="cursor-pointer text-accent ">Log in</span>
          </p>
          <div>
            <div className="mt-4 flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col w-full">
                <input
                  className="h-10 bg-background w-full rounded border border-cadetGray pl-3 outline-2 outline-accent placeholder:text-white"
                  type="text"
                  placeholder="First name"
                />

              </div>
              <div className="flex flex-col w-full">
                <input
                  className="h-10 bg-background w-full rounded border border-cadetGray pl-3 outline-2 outline-accent placeholder:text-white"
                  type="text"
                  placeholder="Last name"
                />
          
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-y-4">
              <input
                className="h-10 bg-background w-full rounded border border-cadetGray pl-3 outline-2 outline-accent placeholder:text-white"
                type="email"
                placeholder="Email"
              />
              <input
                type="password"
                className="h-10 bg-background w-full rounded border border-cadetGray pl-3 outline-2 outline-accent placeholder:text-white"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-x-2">
            <input
              className="h-5 w-5 cursor-pointer text-background accent-accent"
              type="checkbox"
            />
            <p className="text-sm">
              I agree to the{" "}
              <span className="cursor-pointer text-accent ">
                Terms and Conditions
              </span>
            </p>
          </div>
          <button className="mt-6 sm:mt-8 h-12 rounded-md bg-accent px-4 py-2 font-medium text-white hover:bg-accentDark">
            Create account
          </button>
          <div className="mt-5 border-b border-cadetGray text-center text-sm relative">
            <span className="bg-foreground px-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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