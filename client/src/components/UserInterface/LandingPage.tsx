"use client";

import Link from "next/link";
import Navbar from "@/components/UserInterface/Navbar";
import CustomButton from "@/components/UserInterface/CustomButton";
import BackgroundDots from "@/components/UserInterface/BackgroundDots";
import { ArrowRight, GithubLogo } from "@phosphor-icons/react";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <BackgroundDots />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="px-6 lg:px-16">
          <div className="mt-10 md:mt-16">
            <h1 className="relative text-5xl font-semibold md:text-6xl lg:text-9xl">
              Applications
            </h1>
            <h1 className="relative text-5xl font-semibold md:text-6xl lg:text-9xl">
              Managed
            </h1>
            <h1 className="relative text-5xl font-semibold md:text-6xl lg:text-9xl">
              Easily
            </h1>
          </div>
          <div>
            <p className="mt-4 text-xl font-medium text-gray-300 md:mt-10 md:text-4xl">
              Stay organized, efficient, and focused on your job search.
            </p>
            <div className="mt-8 flex flex-col gap-6 md:flex-row lg:mt-12">
              <Link href="/signup">
                <CustomButton
                  label="Get Started"
                  customClasses="bg-accent w-48 h-14 relative overflow-hidden group"
                  icon={ArrowRight}
                  iconSide="right"
                  textClasses="text-lg relative z-10"
                />
              </Link>
              <Link href="https://github.com/krishabbashyal/Apptive" target="_blank" rel="noopener noreferrer">
                <CustomButton
                  label="Star on Github"
                  customClasses="bg-foreground w-56 hover:bg-opacity-100 hover:bg-accentHighlight border border-spacer h-14 relative overflow-hidden group"
                  icon={GithubLogo}
                  textClasses="text-lg relative z-10"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;