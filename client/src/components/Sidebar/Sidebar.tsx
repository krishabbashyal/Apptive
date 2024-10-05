"use client"

import React from 'react'
import Image from 'next/image';
import { Archive, Bug, CalendarDots, GearSix, Briefcase, MapTrifold, SignOut } from "@phosphor-icons/react";
// import SidebarProfileTab from './SidebarProfileTab';
import SidebarTab from './SidebarTab';

const Sidebar = () => {
  return (
    <div className="w-60 min-h-screen bg-foreground flex flex-col flex-shrink-0">
      <div className="h-16 flex items-center justify-center gap-x-2 mt-2.5">
        <Image src="/images/logo.png" className="rounded-full" width={44} height={44} alt="Logo" />
        <p className="text-2xl font-extrabold">Apptive</p>
      </div>
      <div></div>
      <div className="flex flex-col mt-2.5 mx-4 flex-grow">
        {/* <SidebarProfileTab /> */}
        <div className="flex mt-4 flex-col flex-grow">
          <p className='text-xs font-semibold mb-2.5'>GENERAL</p>
          <div className="flex flex-col flex-grow gap-y-1">
            <SidebarTab route="/dashboard" icon={Briefcase} label="Dashboard" />
            <SidebarTab route="/timeline" icon={CalendarDots} label="Timeline" />
            <SidebarTab route="/map" icon={MapTrifold} label="Map" />
            <SidebarTab route="/archive" icon={Archive} label="Archive" />
            <SidebarTab route="/settings" icon={GearSix} label="Settings" />
          </div>
          {/* Spacer div to push the bottom tabs to the bottom */}
          <div className="flex-grow"></div>
          {/* End of comment */}
          <p className='text-xs font-semibold mb-2.5'>ADDITIONAL</p>
          <div className="mb-8 flex flex-col gap-y-1">
            <SidebarTab route="/feedback" icon={Bug} label="Feedback" />
            <SidebarTab isDanger={true} route="/logout" icon={SignOut} label="Sign out" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;