import React from "react";

const SignupForm = () => {
  return (
    <form className="flex bg-foreground p-8 rounded-l-lg w-96 flex-col">
      <h1 className="text-3xl font-bold mb-4 text-center">Sign up</h1>
      <label className="text-gray-400 font-medium" htmlFor="email">
        Email
      </label>
      <input
        className="h-12 rounded-lg border bg-background border-gray-500 pl-4 mt-1 "
        placeholder="Enter your email"
        id="email"
        name="email"
        type="email"
        required
      />
      <label className="mt-3 text-gray-400 font-medium" htmlFor="username">
        Username
      </label>
      <input
        className="h-12 rounded-lg pl-4 mt-1 border bg-background border-gray-500 "
        placeholder="Enter your username"
        id="username"
        name="username"
        type="text"
        required
      />
      <label className="mt-3 text-gray-400 font-medium" htmlFor="password">
        Password
      </label>
      <input
        className="h-12 rounded-lg pl-4 mt-1 border bg-background border-gray-500 "
        placeholder="Enter your password"
        id="password"
        name="password"
        type="password"
        required
      />
      <label className="mt-3 text-gray-400 font-medium" htmlFor="confirmPassword">
        Confirm Password
      </label>
      <input
        className="h-12 rounded-lg pl-4 mt-1 border bg-background border-gray-500 "
        placeholder="Confirm your password"
        id="confirmPassword"
        name="password"
        type="password"
        required
      />
      <button className="bg-accent hover:bg-blue-700 text-white font-medium h-12 py-2 px-4 rounded-lg mt-12">
        Sign up
      </button>
    </form>
  );
};

export default SignupForm;
