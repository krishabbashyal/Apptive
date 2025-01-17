import React from "react";
import { Application } from "@prisma/client";
import ApplicationTableRow from "./ApplicationTableRow";

interface ApplicationTableProps {
  applicationData: Application[];
}

function ApplicationTable({ applicationData }: ApplicationTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="w-full">
      <thead>
  <tr className="bg-background text-white text-sm">
    <th className="pl-6 py-2 text-left font-semibold tracking-wide">Company & Role</th>
    <th className="px-5 py-2 text-left font-semibold tracking-wide">Location</th>
    <th className="px-5 py-2 text-left font-semibold tracking-wide">Application Date</th>
    <th className="px-5 py-2 text-left font-semibold tracking-wide">Salary</th>
    <th className="px-5 py-2 text-left font-semibold tracking-wide">Status</th>
    <th className="px-5 py-2 text-center font-semibold tracking-wide">Actions</th>
  </tr>
</thead>
        <tbody className="">
          {applicationData.length > 0 ? (
            applicationData.map((application: Application) => (
              <ApplicationTableRow
                key={application.id}
                application={application}
              />
            ))
          ) : (
            <tr>
              <td colSpan={9}>No applications found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ApplicationTable;
