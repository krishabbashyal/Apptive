"use client";

import React from "react";
import SearchBar from "./SearchBar";
import { Plus } from "@phosphor-icons/react";
import ApplicationTable from "./ApplicationTable";
import CustomButton from "./CustomButton";
import useShowApplicationModal from "@/lib/store/modalStore";
import { Application } from "@prisma/client";

interface RecentActivityProps {
  applicationData: Application[];
}

const RecentActivity = ({ applicationData }: RecentActivityProps) => {
  const { openApplicationModal } = useShowApplicationModal();

  return (
    <div className="h-full rounded-tr-xl rounded-tl-xl bg-foreground">
      <div className="mx-10 py-6">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl">Recent Activity</h1>
          <div className="flex flex-row gap-x-4">
            <SearchBar />
            <CustomButton
              onClick={openApplicationModal}
              label="Create"
              customClasses="bg-accent"
              icon={Plus}
            />
          </div>
        </div>
        <div className="mt-8">
          <ApplicationTable applicationData={applicationData} />
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
