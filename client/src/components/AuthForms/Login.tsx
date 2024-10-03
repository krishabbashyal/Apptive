import React from "react";

const LoginForm = () => {
  return (
    <form className="flex w-96 flex-col rounded-l-lg bg-foreground">
      <h1 className="mb-4 text-center text-3xl font-bold">Log in</h1>
      <label className="font-medium text-cadetGray" htmlFor="email">
        Email
      </label>
      <input
        className="mt-1 h-12 rounded-lg border border-cadetGray bg-background pl-4"
        placeholder="Enter your email"
        id="email"
        name="email"
        type="email"
        required
      />
      <label className="mt-3 font-medium text-cadetGray" htmlFor="password">
        Password
      </label>
      <input
        className="mt-1 h-12 rounded-lg border border-cadetGray bg-background pl-4"
        placeholder="Enter your password"
        id="password"
        name="password"
        type="password"
        required
      />
      <button className="mt-12 h-12 rounded-lg bg-accent px-4 py-2 font-medium text-white">
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
