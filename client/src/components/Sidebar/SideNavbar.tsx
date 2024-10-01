"use client"

import React from 'react'
import { Archive, Bug, CalendarDots, GearSix, Briefcase, MapTrifold, SignOut } from "@phosphor-icons/react";
import SidebarProfileTab from './SidebarProfileTab';
import SidebarTab from './SidebarTab';

const SideNavbar = () => {
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

export default SideNavbar;