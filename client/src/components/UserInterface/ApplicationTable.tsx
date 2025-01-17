import React from "react";
import { Application } from "@prisma/client";
import ApplicationTableRow from "./ApplicationTableRow";

interface ApplicationTableProps {
  applicationData: Application[];
}

function ApplicationTable({ applicationData }: ApplicationTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-spacer bg-background">
      <table className="w-full">
        <thead>
          <tr className="border-b border-spacer text-sm">
            <th className="whitespace-nowrap px-6 py-4 text-left font-medium text-gray-400">
              Company & Role
            </th>
            <th className="whitespace-nowrap px-6 py-4 text-left font-medium text-gray-400">
              Location
            </th>
            <th className="whitespace-nowrap px-6 py-4 text-left font-medium text-gray-400">
              Application Date
            </th>
            <th className="whitespace-nowrap px-6 py-4 text-left font-medium text-gray-400">
              Salary
            </th>
            <th className="whitespace-nowrap px-6 py-4 text-left font-medium text-gray-400">
              Status
            </th>
            <th className="whitespace-nowrap px-6 py-4 text-center font-medium text-gray-400">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {applicationData.length > 0 ? (
            applicationData.map((application: Application) => (
              <ApplicationTableRow
                key={application.id}
                application={application}
              />
            ))
          ) : (
            <tr>
              <td 
                colSpan={6} 
                className="px-6 py-8 text-center text-gray-400"
              >
                <div className="flex flex-col items-center justify-center space-y-2">
                  <p className="text-lg">No applications found</p>
                  <p className="text-sm">Add your first job application to get started</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ApplicationTable;