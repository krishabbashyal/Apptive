import React from "react";
import { Application } from "@prisma/client";

interface ApplicationTableProps {
  applicationData: Application[];
}

function ApplicationTable({ applicationData }: ApplicationTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-6 py-3 text-left font-semibold">Company</th>
            <th className="px-6 py-3 text-left font-semibold">Role</th>
            <th className="px-6 py-3 text-left font-semibold">Location</th>
            <th className="px-6 py-3 text-left font-semibold">Date</th>
            <th className="px-6 py-3 text-left font-semibold">Salary</th>
            <th className="px-6 py-3 text-left font-semibold">Arrangement</th>
            <th className="px-6 py-3 text-left font-semibold">Status</th>
            <th className="px-6 py-3 text-left font-semibold">Listing URL</th>
            <th className="px-6 py-3 text-left font-semibold">Notes</th>
          </tr>
        </thead>
        <tbody>
          {applicationData.length > 0 ? (
            applicationData.map((application) => (
              <tr key={application.id} className="even:accent-black odd:accent-accent">
                <td className="px-6 py-3">{application.company_name}</td>
                <td className="px-6 py-3">{application.job_title}</td>
                <td className="px-6 py-3">
                  {application.location_city}, {application.location_state}
                </td>
                <td className="px-6 py-3">
                  {new Date(application.application_date).toLocaleDateString()}
                </td>
                <td className="px-6 py-3">
                  {application.salary
                    ? `$${application.salary.toLocaleString()}`
                    : "N/A"}
                </td>
                <td className="px-6 py-3">{application.work_arrangement || "N/A"}</td>
                <td className="px-6 py-3">{application.application_status}</td>
                <td className="px-6 py-3">
                  {application.listing_url ? (
                    <a
                      href={application.listing_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline"
                    >
                      View Listing
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>
                <td className="px-6 py-3">{application.notes || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={9}
                className="px-6 py-3 text-center text-gray-500 italic"
              >
                No applications found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ApplicationTable;
