import React from "react";

interface ApplicationTableProps {}

function ApplicationTable({}: ApplicationTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-white">
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
      </table>
    </div>
  );
}

export default ApplicationTable;
