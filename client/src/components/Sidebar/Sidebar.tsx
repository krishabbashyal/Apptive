"use client"

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image';
import { Archive, Bug, CalendarDots, GearSix, Briefcase, MapTrifold, SignOut, List } from "@phosphor-icons/react";
import SidebarTab from './SidebarTab';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button
        className={`fixed top-4 left-4 z-50 rounded-md md:hidden ${isOpen ? 'hidden' : 'block'}`}
        onClick={toggleSidebar}
      >
        <List size={24} color='white' />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-30 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 transition duration-200 ease-in-out w-60 min-h-screen bg-foreground flex flex-col flex-shrink-0 z-40`}
      >
        <div className="h-16 flex items-center justify-center gap-x-2 mt-2.5">
          <Image src="/images/logo.png" className="rounded-full" width={44} height={44} alt="Logo" />
          <p className="text-2xl font-extrabold">Apptive</p>
        </div>
        <div className="flex flex-col mt-2.5 mx-4 flex-grow">
          <div className="flex mt-4 flex-col justify-between flex-grow">
            <div>
              <p className='text-xs font-semibold mb-2.5'>GENERAL</p>
              <div className="flex flex-col gap-y-1">
                <SidebarTab route="/dashboard" icon={Briefcase} label="Dashboard" />
                <SidebarTab route="/timeline" icon={CalendarDots} label="Timeline" />
                <SidebarTab route="/map" icon={MapTrifold} label="Map" />
                <SidebarTab route="/archive" icon={Archive} label="Archive" />
                <SidebarTab route="/settings" icon={GearSix} label="Settings" />
              </div>
            </div>
            <div className='mb-16 md:mb-0'>
              <p className='text-xs font-semibold mb-2.5'>ADDITIONAL</p>
              <div className="mb-8 flex flex-col gap-y-1">
                <SidebarTab route="/feedback" icon={Bug} label="Feedback" />
                <SidebarTab isDanger={true} route="/" icon={SignOut} label="Sign out" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;