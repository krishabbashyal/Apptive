"use client";

import { IconProps } from "@phosphor-icons/react";
import { Fire } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SidebarTabProps {
  label: string;
  icon: React.ComponentType<IconProps>;
  route: string;
  isDanger?: boolean;
  isComingSoon?: boolean;
}

const SidebarTab = ({
  label,
  icon: Icon,
  route,
  isDanger,
  isComingSoon,
}: SidebarTabProps) => {
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
      className={`flex h-11 items-center rounded-lg ${
        isActiveTab
          ? "bg-accent bg-opacity-10 text-accent"
          : isDanger
          ? "hover:text-danger"
          : "hover:text-accent"
      }`}
    >
      <button
        disabled={isComingSoon}
        className={`flex items-center w-full justify-between ${isComingSoon ? 'bg-muted-white text-muted-white cursor-not-allowed' : ''}`}
      >
        <div className="mx-4 flex items-center">
          <Icon
            color={
              isComingSoon
                ? "#737373"
                : isHovered && isDanger
                ? "#f25757"
                : isHovered || isActiveTab
                ? "#bb86fc"
                : "#FFFFFF"
            }
            size={28}
          />
          <p className={`ml-4 font-medium ${isComingSoon ? 'text-neutral-500' : ''}`}>{label}</p>
        </div>
        {isComingSoon && (
          <div className="absolute left-[160px] bg-opacity-10 rounded-full bg-gradient-to-br from-accent to-[#7539c4] px-2 py-1 text-xs flex items-center justify-center gap-x-1">
            <Fire size={18} color="#FFFFFF" />
            <p className="text-white text-xs">Pro</p>
          </div>
        )}
      </button>
    </Link>
  );
};

export default SidebarTab;
