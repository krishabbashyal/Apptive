"use client";

import { PlusCircle } from "@phosphor-icons/react";


import React from "react";
import Link from "next/link";


const Navbar = () => {
  const userExists = true; // Change this depending on your logic for user authentication

  if (userExists) {
    return (

        <div className="hidden md:flex sticky z-50 h-16 w-full bg-foreground md:h-20">
          <div className="flex items-center justify-end lg:justify-start mx-4">
            <button className="rounded-lg flex flex-row gap-x-1 bg-accentTransition px-3 py-2 font-medium">
              <PlusCircle size={24} />
              <p className="font-semibold">New</p>
            </button>
          </div>
      </div>
    );
  } else {
    return (
      <div className="sticky z-50 flex h-16 w-full flex-col justify-center bg-foreground md:h-20">
        <div className="mx-4 flex items-center justify-between md:mx-32">
          {/* Logo */}
          <div>
            <p className="text-3xl font-bold">Apptive</p>
          </div>
          {/* Buttons */}
          <div className="hidden flex-shrink-0 gap-x-2 md:flex md:gap-x-6">
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
  }
};

export default Navbar;
