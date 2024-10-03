import React from "react";

const SignupForm = () => {
  return (
    <div>
      <form className="flex w-96 flex-col rounded-r-xl border border-graySeperator bg-foreground p-8">
        <h1 className="text-left text-3xl font-medium">Create an account</h1>
        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <span className="text-accent underline">Log in</span>
        </p>
        <div>
          <div className="mt-4 flex gap-x-4">
            <input
              className="h-10 w-full rounded border border-cadetGray pl-3 outline-2 outline-accent placeholder:text-cadetGray"
              type="text "
              placeholder="First name"
            />
            <input
              className="h-10 w-full rounded border border-cadetGray pl-3 outline-2 outline-accent placeholder:text-cadetGray"
              type="text "
              placeholder="Last name"
            />
          </div>
          <div className="mt-4 flex flex-col gap-y-4">
            <input
              className="h-10 w-full rounded border border-cadetGray pl-3 outline-2 outline-accent placeholder:text-cadetGray"
              type="email "
              placeholder="Email"
            />
            <input
              type="text "
              className="h-10 w-full rounded border border-cadetGray pl-3 outline-2 outline-accent placeholder:text-cadetGray"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-x-2">
          <input className="h-4 w-4 accent-accent" type="checkbox" />
          <p className="text-sm">
            I agree to the{" "}
            <span className="text-accent underline">Terms and Conditions</span>
          </p>
        </div>
        <button className="mt-12 h-12 rounded-md bg-accent px-4 py-2 font-medium text-white hover:bg-blue-700">
          Create account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
