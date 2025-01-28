import React from "react";
import { Application } from "@prisma/client";
import ApplicationTableRow from "./ApplicationTableRow";
import { FolderOpen } from "@phosphor-icons/react";

interface ApplicationTableProps {
  applicationData: Application[];
}

function ApplicationTable({ applicationData }: ApplicationTableProps) {
  return (
    <div className=" rounded-xl bg-background">
      <div className="overflow-y-auto max-h-[calc(100vh-22rem)]">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#242424]">
              <th className="px-6 py-4 text-left">
                <span className="text-sm font-medium uppercase tracking-wider text-gray-300">
                  Company & Role
                </span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="text-sm font-medium uppercase tracking-wider text-gray-300">
                  Location
                </span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="text-sm font-medium uppercase tracking-wider text-gray-300">
                  Application Date
                </span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="text-sm font-medium uppercase tracking-wider text-gray-300">
                  Salary
                </span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="text-sm font-medium uppercase tracking-wider text-gray-300">
                  Status
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#242424] pb-96">
            {applicationData.length > 0 ? (
              applicationData.map((application: Application) => (
                <ApplicationTableRow
                  key={application.id}
                  application={application}
                />
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-12 h-96">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="rounded-full bg-accentHighlight/60 p-3 mb-4">
                      <FolderOpen size={24} className="text-accent" />
                    </div>
                    <p className="text-base font-medium text-gray-300">
                      No applications yet
                    </p>
                    <p className="mt-1 text-sm text-gray-300">
                      Start tracking your job search by adding your first
                      application
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApplicationTable;
