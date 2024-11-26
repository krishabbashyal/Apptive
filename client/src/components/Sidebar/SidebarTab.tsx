"use client"

import { IconProps } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
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

  return (
    <Link
      href={route}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`h-11 flex items-center cursor-pointer rounded-lg ${isActiveTab ? "bg-accent bg-opacity-10  text-accent" : isDanger ? "hover:text-danger" : "hover:text-accent"}`}>
      <div className="flex items-center mx-4">
        <Icon color={isHovered && isDanger ? "#f25757" : isHovered || isActiveTab ? "#bb86fc" : "#FFFFFF"} size={28} />
        <p className="ml-4 font-medium">{label}</p>
      </div>
    </Link>
  );
};

export default SidebarTab;