"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky z-50 flex w-full flex-col justify-center bg-foreground h-16 md:h-20">
      <div className="mx-4 md:mx-32 flex items-center justify-between">
        {/* Logo */}
        <div>
          <p className="text-3xl font-bold">Apptive</p>
        </div>
        {/* Buttons */}
        <div className="hidden md:flex flex-shrink-0 gap-x-2 md:gap-x-6">
          <Link
            href={"/login"}
            className="rounded-lg bg-cadetGrayDark px-3.5 py-1.5 text-lg font-semibold"
          >
            Log in
          </Link>
          <Link
            href={"/signup"}
            className="rounded-lg bg-white px-3.5 py-1.5 text-lg font-semibold text-black"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
