"use client";

import React from "react";
import Navbar from "@/components/UserInterface/Navbar";
import { ArrowRight, GithubLogo } from "@phosphor-icons/react";
import CustomButton from "@/components/UserInterface/CustomButton";

const LandingPage = () => {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <div className="px-16">
        <div className="mt-10 md:mt-16">
          <h1 className="text-5xl font-semibold md:text-6xl lg:text-8xl">
            Applications
          </h1>
          <h1 className="text-5xl font-semibold md:text-6xl lg:text-8xl">
            Managed
          </h1>
          <h1 className="text-5xl font-semibold md:text-6xl lg:text-8xl">
            Easily
          </h1>
        </div>
        <div>
          <p className="mt-4 text-sm font-medium text-gray-300 md:mt-10 md:text-4xl">
            Stay organized, efficient, and focused on your job search.
          </p>
          <div className="mt-12 flex flex-col gap-6 sm:flex-row">
            <CustomButton
              label="Get Started"
              customClasses="bg-accent w-48 h-14"
              icon={ArrowRight}
              iconSide="right"
              textClasses="text-lg"
              onClick={() => {}}
            />
            <CustomButton
              label="Star on Github"
              customClasses="bg-foreground w-56 hover:bg-opacity-100 hover:bg-accentHighlight border border-spacer h-14"
              icon={GithubLogo}
              textClasses="text-lg"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
