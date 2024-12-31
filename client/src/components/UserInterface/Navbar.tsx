import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between bg-none px-6 lg:px-16 py-5">
        <div className="flex items-center gap-x-2">
          <Image
            src="/images/logo.png"
            className="rounded-full"
            width={38}
            height={38}
            alt="Logo"
          />
          <p className="text-2xl font-extrabold">Apptive</p>
        </div>
        <div className="items-center hidden lg:flex gap-6">
          <Link href="/login">
            <CustomButton label="Log In" textClasses="hover:text-accent" customClasses="bg-foreground"/>
          </Link>
          <Link href="/signup">
            <CustomButton label="Sign up" customClasses="bg-accent"/>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
