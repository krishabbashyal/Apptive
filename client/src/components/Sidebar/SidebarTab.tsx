"use client";

import { IconProps } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { logoutUser } from "@/app/(auth)/actions";

interface SidebarTabProps {
  label: string;
  icon: React.ComponentType<IconProps>;
  route: string;
  isDanger?: boolean;
}

const SidebarTab = ({
  label,
  icon: Icon,
  route,
  isDanger,
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
        onClick={
          isDanger
            ? () => {
                logoutUser();
              }
            : undefined
        }
        className={`flex w-full items-center justify-between`}
      >
        <div className="mx-4 flex items-center">
          <Icon
            color={
              isHovered && isDanger
                ? "#f25757"
                : isHovered || isActiveTab
                  ? "#bb86fc"
                  : "#FFFFFF"
            }
            size={28}
          />
          <p className={`ml-4 font-medium`}>{label}</p>
        </div>
      </button>
    </Link>
  );
};

export default SidebarTab;
