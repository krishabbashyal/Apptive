import React, { useState, useRef, useEffect } from "react";
import { Application } from "@prisma/client";
import { Prohibit, BookmarkSimple, Users, CheckCircle, Hourglass } from "@phosphor-icons/react";

interface ButtonProps {
  application: Application;
  setIsOpen: (isOpen: boolean) => void
  label: string
}

const getStatusColor = (status: string) => {
  const colors = {
    Applied: "bg-accentHighlight text-accent hover:ring-accent/50",
    Interviewing: "bg-yellow-300/10 text-yellow-200 hover:ring-yellow-200/50",
    Accepted: "bg-green-900/10 text-green-600 hover:ring-green-600/50",
    Rejected: "bg-danger/10 text-danger hover:ring-danger/50",
    Bookmarked: "bg-blue-800/15 text-blue-500 hover:ring-blue-800/90",
  };
  return colors[status as keyof typeof colors] || "bg-gray-800 text-gray-200";
};

const getDropdownColor = (status: string) => {
  const colors = {
    Applied: "hover:bg-accentHighlight text-accent",
    Interviewing: "hover:bg-yellow-300/10 text-yellow-200",
    Accepted: "hover:bg-green-900/10 text-green-600",
    Rejected: "hover:bg-danger/10 text-danger",
    Bookmarked: "hover:bg-blue-800/15 text-blue-500",
  };
  return colors[status as keyof typeof colors] || "bg-gray-800 text-gray-200";
};

const StatusOptions = ({ application, setIsOpen, label }: ButtonProps) => {
  return (
    <button
      onClick={() => setIsOpen(false)}      
      className={`flex items-center gap-x-4 border-b border-spacer/30 px-4 py-2.5 text-left transition-colors last:border-0 disabled:cursor-not-allowed disabled:bg-spacer/10 disabled:text-spacer ${getDropdownColor(label)}`}
      disabled={application.application_status === label}
    >
      {label === "Applied" && <Hourglass size={20} />}
      {label === "Interviewing" && <Users size={20} />}
      {label === "Accepted" && <CheckCircle size={20} />}
      {label === "Rejected" && <Prohibit size={20} />}
      {label === "Bookmarked" && <BookmarkSimple size={20} />}
      <p>{label}</p>
    </button>
  );
};


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


  return (
    <div ref={dropdownRef}>
      <button className="w-fit" onClick={() => setIsOpen(!isOpen)}>
        <div
          className={`px-3 gap-x-3 rounded-lg hover:ring-[1px] flex items-center  ${getStatusColor(application.application_status)} `}
        >
                {application.application_status === "Applied" && <Hourglass size={20} />}
      {application.application_status === "Interviewing" && <Users size={20} />}
      {application.application_status === "Accepted" && <CheckCircle size={20} />}
      {application.application_status === "Rejected" && <Prohibit size={20} />}
      {application.application_status === "Bookmarked" && <BookmarkSimple size={20} />}

          <p className="py-1.5 text-sm">
            {application.application_status}
          </p>
        </div>
      </button>
      {isOpen && (
        <div className="absolute right-[330px] z-10 mt-1 w-52 rounded-lg border border-spacer bg-foreground py-1 shadow-lg">
          <div className="flex flex-col">
            <StatusOptions application={application} setIsOpen={setIsOpen} label="Applied" />
            <StatusOptions application={application} setIsOpen={setIsOpen} label="Interviewing" />
            <StatusOptions application={application} setIsOpen={setIsOpen} label="Accepted" />
            <StatusOptions application={application} setIsOpen={setIsOpen} label="Rejected" />
            <StatusOptions application={application} setIsOpen={setIsOpen} label="Bookmarked" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationStatus;
// ${getStatusColor(application.application_status)
