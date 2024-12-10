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
        <tbody>
          <tr className="text-white even:bg-foreground odd:bg-background">
            <td className="px-6 py-3">Google</td>
            <td className="px-6 py-3">Software Engineer</td>
            <td className="px-6 py-3">Mountain View, CA</td>
            <td className="px-6 py-3">2024-12-01</td>
            <td className="px-6 py-3">$150,000</td>
            <td className="px-6 py-3">Hybrid</td>
            <td className="px-6 py-3">Interview</td>
            <td className="px-6 py-3">
              <a
                href="https://careers.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                Job Listing
              </a>
            </td>
            <td className="px-6 py-3">
              Excited about the team and tech stack.
            </td>
          </tr>
          <tr className="text-white even:bg-foreground odd:bg-background">
            <td className="px-6 py-3">Microsoft</td>
            <td className="px-6 py-3">Product Manager</td>
            <td className="px-6 py-3">Redmond, WA</td>
            <td className="px-6 py-3">2024-11-28</td>
            <td className="px-6 py-3">$135,000</td>
            <td className="px-6 py-3">Remote</td>
            <td className="px-6 py-3">Pending</td>
            <td className="px-6 py-3">
              <a
                href="https://careers.microsoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                Job Listing
              </a>
            </td>
            <td className="px-6 py-3">Waiting for recruiter response.</td>
          </tr>
          <tr className="text-white even:bg-foreground odd:bg-background">
            <td className="px-6 py-3">Amazon</td>
            <td className="px-6 py-3">Data Analyst</td>
            <td className="px-6 py-3">Seattle, WA</td>
            <td className="px-6 py-3">2024-11-25</td>
            <td className="px-6 py-3">$120,000</td>
            <td className="px-6 py-3">In-Office</td>
            <td className="px-6 py-3">Rejected</td>
            <td className="px-6 py-3">
              <a
                href="https://www.amazon.jobs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                Job Listing
              </a>
            </td>
            <td className="px-6 py-3">
              Recruiter mentioned they’ll keep my resume for future openings.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ApplicationTable;
