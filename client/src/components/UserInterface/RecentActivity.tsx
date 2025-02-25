"use client";

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { Plus } from "@phosphor-icons/react";
import ApplicationTable from "./ApplicationTable";
import CustomButton from "./CustomButton";
import useShowApplicationModal from "@/lib/store/useShowApplicationModal";
import { Application } from "@prisma/client";

interface RecentActivityProps {
  applicationData: Application[];
}

const RecentActivity = ({ applicationData }: RecentActivityProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { openApplicationModal } = useShowApplicationModal();

  const filteredData = applicationData.filter(
    (application) =>
      application.company_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      application.location_city
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      application.location_state
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      application.job_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      application.location_city
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      application.application_status
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="h-full rounded-tl-xl rounded-tr-xl bg-foreground">
      <div className="mx-10 py-6">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-semibold text-gray-100">
            Recent Applications
          </h1>
          <div className="flex flex-row gap-x-4">
            <SearchBar onSearchChange={setSearchTerm} />
            <CustomButton
              onClick={openApplicationModal}
              label="Create"
              customClasses="bg-accent"
              icon={Plus}
            />
          </div>
        </div>
        <div className="mt-8">
          <ApplicationTable applicationData={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
