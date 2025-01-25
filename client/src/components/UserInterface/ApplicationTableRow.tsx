import React, { useState } from "react";
import { Application } from "@prisma/client";
import { Buildings, CaretDown, CaretUp } from "@phosphor-icons/react";
import { Link as LinkIcon } from "@phosphor-icons/react";
import { Archive } from "@phosphor-icons/react";
import { NotePencil } from "@phosphor-icons/react";
import useShowArchiveModal from "@/lib/store/useShowArchiveModal";

interface ApplicationTableRowProps {
  application: Application;
}

const ApplicationTableRow = ({ application }: ApplicationTableRowProps) => {
  const [isNotesOpen, setIsNotesOpen] = useState(false);

  const { openArchiveModal } = useShowArchiveModal();

const handleApplicationEdit = () => {
  // Handle application edit logic here
  console.log("Edit application:", application);
};
const handleApplicationLink = () => {
  // Handle application archive logic here
  console.log("Application link:", application);
};

const handleArchiveApplication = (id: string, title: string, company: string) => {
  openArchiveModal(id, title, company);
};

  const getStatusColor = (status: string) => {
    const colors = {
      Applied: "bg-accentHighlight text-accent",
      Interview: "bg-purple-900 text-purple-200",
      Offer: "bg-green-900 text-green-200",
      Rejected: "bg-red-900 text-red-200",
      Pending: "bg-yellow-900 text-yellow-200",
    };
    return colors[status as keyof typeof colors] || "bg-gray-800 text-gray-200";
  };

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
      <tr className=" even:bg-background odd:bg-[#101010] hover:bg-accentHighlight hover:bg-opacity-50">
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
        <td className={`px-6 py-4 ${ application.salary === null && "text-gray-200 pl-[52px] tracking-[-1.5px]"}`}>
          {formatSalary(application.salary)}
        </td>
        <td className="px-6 py-4">
          <span
            className={`rounded-full px-2 py-1 text-sm ${getStatusColor(application.application_status)}`}
          >
            {application.application_status}
          </span>
        </td>
        <td className="px-6 gap-x-3 justify-center flex mt-7 items-center">
        <button onClick={handleApplicationEdit}>
            <NotePencil  size={24} className="text-amber-300 hover:text-amber-600"  />
          </button>
          <button onClick={handleApplicationLink} disabled={application.listing_url === null}>
            <LinkIcon size={24} className="text-blue-400 hover:text-blue-600" />
          </button>
          <button onClick={() => handleArchiveApplication(application.id, application.job_title, application.company_name)}>
            <Archive  size={24} className="text-rose-400 hover:text-rose-500"  />
          </button>
          
          <button
            onClick={() => setIsNotesOpen(!isNotesOpen)}
            className="absolute right-[125px] text-gray-400 hover:text-gray-200"
          >
            {isNotesOpen ? <CaretUp size={24} /> : <CaretDown size={24} />}
          </button>
        </td>
      </tr>
      {isNotesOpen && (
        <tr className="even:bg-background odd:bg-[#101010]">
          <td colSpan={7} className="px-6 py-4">
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
