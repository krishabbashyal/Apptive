"use client"

import { IconProps } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

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

export default SidebarTab;