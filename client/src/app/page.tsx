"use client";

import React from "react";
import Navbar from "@/components/UserInterface/Navbar";
import { ArrowRight, GithubLogo } from "@phosphor-icons/react";
import CustomButton from "@/components/UserInterface/CustomButton";

const LandingPage = () => {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Circle */}
        <div className="absolute top-1/6 -right-48 w-[600px] h-[600px] bg-accent opacity-5 rounded-full blur-3xl" />
        <div className="absolute top-3/4 -left-48 w-[400px] h-[400px] bg-accent opacity-10 rounded-full blur-3xl" />


        
        {/* Animated Dots Grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="relative w-full h-full">
            {Array.from({ length: 200 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-accent rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animation: `pulse ${Math.random() + 0.5}s  infinite, float ${3 + Math.random() * 15}s infinite`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="px-16">
          <div className="mt-10 md:mt-16">
            <h1 className="text-5xl font-semibold md:text-6xl lg:text-8xl relative">
              Applications
            </h1>
            <h1 className="text-5xl font-semibold md:text-6xl lg:text-8xl relative">
              Managed
            </h1>
            <h1 className="text-5xl font-semibold md:text-6xl lg:text-8xl relative">
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
                customClasses="bg-accent w-48 h-14 relative overflow-hidden group"
                icon={ArrowRight}
                iconSide="right"
                textClasses="text-lg relative z-10"
                onClick={() => {}}
              />
              <CustomButton
                label="Star on Github"
                customClasses="bg-foreground w-56 hover:bg-opacity-100 hover:bg-accentHighlight border border-spacer h-14 relative overflow-hidden group"
                icon={GithubLogo}
                textClasses="text-lg relative z-10"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(10px, 10px);
          }
          50% {
            transform: translate(-5px, 5px);
          }
          75% {
            transform: translate(-10px, -10px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        @keyframes pulse {
          0% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;