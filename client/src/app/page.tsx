"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, GithubLogo} from "@phosphor-icons/react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      {/* Navigation */}
      <nav className="px-16 flex items-center justify-between bg-foreground py-6">
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
        <div className="flex items-center gap-6">
          <a href="#" className="transition-colors hover:text-accent">
            Log in
          </a>
          <button className="rounded-lg bg-accent px-4 py-2 transition-colors">
            Sign Up
          </button>
        </div>
      </nav>

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
            <button className="flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-lg transition-colors hover:bg-opacity-80">
              Get Started <ArrowRight size={20} weight="bold" />
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border border-spacer bg-foreground px-6 py-3 text-lg transition-colors hover:bg-accentHighlight">
              <GithubLogo size={20} weight="bold" /> Star on GitHub
            </button>
          </div>
          
        </div>
      </div>    
    </div>
  );
};

export default LandingPage;