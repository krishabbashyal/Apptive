import React, { useState, useRef, useEffect } from "react";
import { Application } from "@prisma/client";

interface ApplicationStatusProps {
  application: Application;
}
const ApplicationStatus = ({ application }: ApplicationStatusProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const getStatusColor = (status: string) => {
    const colors = {
      Applied: "bg-accentHighlight text-accent",
      Interviewing: "bg-yellow-300/10 text-yellow-200",
      Accepted: "bg-green-900/10 text-green-600",
      Rejected: "bg-danger/10 text-danger",
      Bookmarked: "bg-blue-800/10 text-blue-500",
    };
    return colors[status as keyof typeof colors] || "bg-gray-800 text-gray-200";
  };

  return (
    <div ref={dropdownRef}>
      <button className="w-fit" onClick={() => setIsOpen(!isOpen)}>
        <div
          className={`rounded-lg ${getStatusColor(application.application_status)} `}
        >
          <p className="px-3 py-1.5 text-sm">
            {application.application_status}
          </p>
        </div>
      </button>
      {isOpen && (
        <div className="absolute right-[330px] z-10 mt-1 w-52 rounded-lg border border-spacer bg-foreground py-1 shadow-lg">
          <div className="flex flex-col">
            <p>Option 1</p>
            <p>Option 2</p>
            <p>Option 3</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationStatus;
// ${getStatusColor(application.application_status)
