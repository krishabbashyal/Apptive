"use client";

import React from "react";
import Image from "next/image";
import { Archive, Bug, CalendarDots, GearSix, House, IconProps, MapTrifold, SignOut } from "@phosphor-icons/react";

const SidebarProfileTab = () => {
  return (
    <div className="w-full h-20 mt-4 rounded-md flex justify-center cursor-pointer bg-background">
      <div className="flex gap-x-4 items-center">
        <Image src="/images/profile.jpg" className="rounded-full" width={48} height={48} alt="Profile Picture" />
        <div>
          <p>Krishab Bashyal</p>
          <p className="text-xs -mt-0.5 text-gray-400">Developer</p>
        </div>
      </div>
    </div>
  );
};

interface SidebarTabProps {
  label: string;
  customStyle?: string;
  icon: React.ComponentType<IconProps>;
}

const SidebarTab = ({ label, icon: Icon, customStyle }: SidebarTabProps) => {
  return (
    <div className={`h-12 flex  items-center bg-background cursor-pointer border-l-4 hover:bg-slate-700 rounded-md border-background ${customStyle || ""}`}>
      <div className="flex ml-[30px] items-center">
        <Icon color="#fff" size={24} />
        <p className="ml-4">{label}</p>
      </div>
    </div>
  );
};
const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-foreground flex flex-col">
      <div className="flex flex-col mt-16 mx-4 flex-grow">
        <SidebarProfileTab />
        <div className="flex mt-8 flex-col flex-grow">
          <div className="flex flex-col gap-y-2.5 flex-grow">
            <SidebarTab icon={House} label="Home" customStyle="border-blue-500"/>
            {/* <SidebarTab icon={CalendarDots} label="Timeline" />
            <SidebarTab icon={MapTrifold} label="Map" /> */}
            <SidebarTab icon={Archive} label="Archive" />
            <SidebarTab icon={GearSix} label="Settings" />
          </div>
          {/* Spacer div to push the bottom tabs to the bottom */}
          <div className="flex-grow"></div>
          {/* End of comment */}
          <div className="mb-8 flex flex-col gap-y-2.5">
            <SidebarTab icon={Bug} label="Feedback" />
            <SidebarTab icon={SignOut} label="Sign out" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
