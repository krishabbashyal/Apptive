import React, { useState } from "react";
import { Application } from "@prisma/client";
import { Buildings, CaretDown } from "@phosphor-icons/react";
import ApplicationRowActions from "./ApplicationRowActions";
import ApplicationStatus from "./ApplicationStatus";

interface ApplicationTableRowProps {
  application: Application;
}

const ApplicationTableRow = ({ application }: ApplicationTableRowProps) => {
  const [isNotesOpen, setIsNotesOpen] = useState(false);

  const formatSalary = (salary: number | null) => {
    if (!salary) return "---";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(salary);
  };

  const getTimeAgo = (date: Date) => {
    const diff = new Date().getTime() - new Date(date).getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days === 0) return "Today";
    if (days === 1) return "Yesterday";
    return `${days} days ago`;
  };

  return (
    <>
      <tr className="odd:bg-[#101010] even:bg-background hover:bg-accentHighlight hover:bg-opacity-50">
        <td className="px-6 py-4">
          <div className="flex flex-row items-center">
            <Buildings
              size={42}
              className="rounded-lg bg-accentHighlight p-2 text-accent"
            />
            <div className="ml-4 flex flex-col">
              <p className="font-semibold text-gray-200">
                {application.company_name}
              </p>
              <p className="text-gray-400">{application.job_title}</p>
            </div>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="flex flex-col">
            <span className="text-gray-200">
              {application.location_city}, {application.location_state}
            </span>
            <span className="text-sm text-gray-400">
              {application.work_arrangement}
            </span>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="flex flex-col">
            <span className="text-gray-200">
              {new Date(application.application_date).toLocaleDateString()}
            </span>
            <span className="text-sm text-gray-400">
              {getTimeAgo(application.application_date)}
            </span>
          </div>
        </td>
        <td
          className={`px-6 py-4 ${application.salary === null ? "pl-[51px] tracking-[-1.5px] text-gray-200" : ""}`}
        >
          {formatSalary(application.salary)}
        </td>
        <td className="px-6 py-4">
          <ApplicationStatus application={application} />
        </td>
        <td className="py-4 flex items-center justify-center gap-x-4">
          <button
            onClick={() => setIsNotesOpen(!isNotesOpen)}
            className="rounded-lg border border-spacer/20 bg-spacer/20 p-0.5 mt-0.5 text-gray-400 transition-all duration-200 ease-in-out hover:scale-110 flex items-center gap-x-3 hover:border-accent hover:bg-spacer/50 hover:text-gray-200"
          >
            <CaretDown size={24} className={`${isNotesOpen ? "rotate-180 duration-300" : "rotate-0 duration-300"}`} />
          </button>
          <ApplicationRowActions application={application} />
        </td>
      </tr>

      {isNotesOpen && (
        <tr className="odd:bg-[#101010] even:bg-background">
          <td colSpan={6} className="px-6 py-4">
            <div className="ml-14">
              <p className="mb-2 font-semibold text-gray-300">Notes:</p>
              <p className="whitespace-pre-wrap text-gray-400">
                {application.notes || "No notes available"}
              </p>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default ApplicationTableRow;