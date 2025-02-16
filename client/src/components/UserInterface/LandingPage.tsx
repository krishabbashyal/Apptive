"use client";

import Link from "next/link";
import Navbar from "@/components/UserInterface/Navbar";
import CustomButton from "@/components/UserInterface/CustomButton";
import BackgroundDots from "@/components/UserInterface/BackgroundDots";
import Image from "next/image";

import {
  ArrowRight,
  GithubLogo,
  ReadCvLogo,
  ChalkboardTeacher,
  MapPinArea,
  Trophy,
} from "@phosphor-icons/react";
import FeatureCard from "../LandingPage/FeatureCard";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <BackgroundDots />

      {/* Application Screenshot */}
      <div className="absolute top-[256px] right-[-700px] z-0 animate-fade-in-left-bounce animation-delay-3400 opacity-0">
        <Image src="/images/screenshot.png" width={1600} height={1600} className="rounded-2xl shadow-[0px_0px_512px_0px] shadow-accent/25" alt="Application Screenshot"></Image>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="px-6 lg:px-16">
          <div className="mt-10 md:mt-16">
            <h1 className="relative animate-fade-in-up-bounce animation-delay-600 text-5xl font-semibold opacity-0 md:text-6xl lg:text-9xl">
              Applications
            </h1>
            <h1 className="relative animate-fade-in-up-bounce animation-delay-900 text-5xl font-semibold opacity-0 md:text-6xl lg:text-9xl">
              Managed
            </h1>
            <h1 className="relative animate-fade-in-up-bounce animation-delay-1200 text-5xl font-semibold opacity-0 md:text-6xl lg:text-9xl">
              Easily
            </h1>
          </div>
          <div>
            <div className="mt-8 animate-fade-in-right-bounce animation-delay-3400 flex flex-col gap-6 opacity-0 md:flex-row lg:mt-16">
              <Link href="/signup">
                <CustomButton
                  label="Get Started"
                  customClasses="bg-accent w-48 h-14 relative overflow-hidden group"
                  icon={ArrowRight}
                  iconSide="right"
                  textClasses="text-lg relative z-10"
                />
              </Link>
              <Link
                href="https://github.com/krishabbashyal/Apptive"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomButton
                  label="Star on Github"
                  customClasses="bg-foreground w-56 hover:bg-opacity-100 hover:bg-accentHighlight border border-spacer h-14 relative overflow-hidden group"
                  icon={GithubLogo}
                  textClasses="text-lg relative z-10"
                />
              </Link>
            </div>
            <p className="animate-fade-in-up animation-delay-2800 text-xl font-medium opacity-0 md:mt-16 md:text-4xl">
              Stay organized, efficient, and focused on your job search.
            </p>
            <div className="mt-8 grid max-w-[1000px] grid-cols-2 gap-x-6 gap-y-4 rounded-xl animate-fade-in-up-delay-3 delay-1000">
              <FeatureCard
                title="Log Applications"
                customClasses="animate-fade-in-up-bounce animation-delay-1800" 
                icon={ReadCvLogo}
                description="Effortlessly catalog job applications in your career dashboard - replace chaotic spreadsheets with beaufiful tables."
              />
              <FeatureCard
                title="Manage Applications"
                customClasses="animate-fade-in-up-bounce animation-delay-2000" 
                icon={ChalkboardTeacher}
                description="Command your job search with dynamic status updates, and insightful analytics to navigate your interview pipeline."
              />
              <FeatureCard
                title="Application Map"
                customClasses="animate-fade-in-up-bounce animation-delay-2200" 
                icon={MapPinArea}
                description="Discover your career landscape through an interactive map, visualizing opportunities and tracking your applications across cities."
              />
              <FeatureCard
                title="Unlock Achievements"
                customClasses="animate-fade-in-up-bounce animation-delay-2400" 
                icon={Trophy}
                description="Level up your job hunt with gamified milestones celebrating interviews secured, and career breakthroughs achieved."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
