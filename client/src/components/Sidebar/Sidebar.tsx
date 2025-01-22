"use client";

import Image from "next/image";
import {
  Archive,
  Bug,
  CalendarDots,
  GearSix,
  Briefcase,
  MapTrifold,
  SignOut,
} from "@phosphor-icons/react";
import SidebarTab from "./SidebarTab";

const Sidebar = () => {
  return (
    <div className="flex h-full w-[15rem] flex-col bg-foreground">
      <div className="mt-2.5 flex h-16 items-center justify-center gap-x-2">
        <Image
          src="/images/logo.png"
          className="rounded-full"
          width={44}
          height={44}
          alt="Logo"
        />
        <p className="text-2xl font-extrabold">Apptive</p>
      </div>
      <div className="mx-4 mt-2.5 flex flex-grow flex-col">
        <div className="mt-4 flex flex-grow flex-col justify-between">
          <div>
            <p className="mb-2.5 text-xs font-semibold opacity-50">GENERAL</p>
            <div className="flex flex-col gap-y-1">
              <SidebarTab
                route="/dashboard"
                icon={Briefcase}
                label="Dashboard"
              />
              <SidebarTab
                route="/timeline"
                icon={CalendarDots}
                label="Activity"
                isComingSoon={true}
              />
              <SidebarTab route="/map" icon={MapTrifold} label="Map" isComingSoon={true} />
              <SidebarTab route="/archive" icon={Archive} label="Archive" />
            </div>
          </div>
          <div className="mb-16 md:mb-0">
            <p className="mb-2.5 text-xs font-semibold opacity-50">
              ADDITIONAL
            </p>
            <div className="mb-8 flex flex-col gap-y-1">
              <SidebarTab route="/settings" icon={GearSix} label="Settings" />
              <SidebarTab route="/feedback" icon={Bug} label="Feedback" />
              <SidebarTab
                isDanger={true}
                route="/"
                icon={SignOut}
                label="Sign out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
