"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Archive, Bug, CalendarDots, GearSix, Briefcase, IconProps, MapTrifold, SignOut } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const SidebarProfileTab = () => {
  return (
    <div className="w-full flex justify-center border-b border-graySeperator py-6 cursor-pointer">
      <div className="flex gap-x-3 items-center">
        <Image src="/images/profile.jpg" className="rounded-full" width={42} height={42} alt="Profile Picture" />
        <div>
          <p className="font-medium">Krishab Bashyal</p>
          <p className="text-xs -mt-0.5 text-cadetGray">Developer</p>
        </div>
      </div>
    </div>
  );
};

interface SidebarTabProps {
  label: string;
  icon: React.ComponentType<IconProps>;
  route: string;
  isDanger?: boolean;
}

const SidebarTab = ({ label, icon: Icon, route, isDanger }: SidebarTabProps) => {
  const pathname = usePathname();
  const [isActiveTab, setIsActiveTab] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsActiveTab(pathname === route);
  }, [pathname, route]);

  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.push(route)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} // Adding accentLight makes the border not show up
      className={`h-12 flex  items-center cursor-pointer border-l-[6px] ${isDanger && isHovered ? "hover:text-bittersweet" : "hover:text-accentLight"} rounded-md ${isActiveTab ? "border-accentLight text-lg text-accentLight" : "border-white"}`}>
      <div className="flex ml-[20px] items-center">
        <Icon color={(isHovered && !isDanger) || isActiveTab ? "#B8A0FF" : isDanger && isHovered ? "#f25757" : "black"} size={isActiveTab ? 30 : 28} />
        <p className="ml-5">{label}</p>
      </div>
    </button>
  );
};
const Sidebar = () => {
  return (
    <div className="w-60 min-h-screen bg-foreground flex flex-col flex-shrink-0">
      <div className="h-16 flex items-center justify-center">
        <p className="text-3xl font-black">AppTrack</p>
      </div>
      <div></div>
      <div className="flex flex-col mt-2.5 mx-4 flex-grow">
        <SidebarProfileTab />
        <div className="flex mt-6 flex-col flex-grow">
          <div className="flex flex-col gap-y-2 flex-grow">
            <SidebarTab route="/dashboard" icon={Briefcase} label="Dashboard" />
            <SidebarTab route="/timeline" icon={CalendarDots} label="Timeline" />
            <SidebarTab route="/map" icon={MapTrifold} label="Map" />
            <SidebarTab route="/archive" icon={Archive} label="Archive" />
            <SidebarTab route="/settings" icon={GearSix} label="Settings" />
          </div>
          {/* Spacer div to push the bottom tabs to the bottom */}
          <div className="flex-grow"></div>
          {/* End of comment */}
          <div className="mb-8 flex flex-col gap-y-2">
            <SidebarTab route="/feedback" icon={Bug} label="Feedback" />
            <SidebarTab isDanger={true} route="/logout" icon={SignOut} label="Sign out" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
