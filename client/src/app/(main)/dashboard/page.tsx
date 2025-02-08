import React from "react";

import ApplicationForm from "@/components/Forms/ApplicationForm";
import StatCardContainer from "@/components/UserInterface/StatCardContainer";
import RecentActivityContainer from "@/components/UserInterface/RecentActivityContainer";

import UpdateApplicationForm from "@/components/Forms/UpdateApplicationForm";

const Dashboard = () => {
  return (
    <div className="h-full w-full">
      <ApplicationForm />
      <UpdateApplicationForm />
      <div className="mx-12 flex flex-col h-full">
        <StatCardContainer />
        <div className="mt-8 h-full">
          <RecentActivityContainer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
