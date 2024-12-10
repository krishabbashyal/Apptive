import React from "react";

import ApplicationForm from "@/components/Forms/ApplicationForm";
import StatCard from "@/components/UserInterface/StatCard";
import RecentActivity from "@/components/UserInterface/RecentActivity";

const Dashboard = () => {
  return (
    <div className="h-full w-full">

        <ApplicationForm />


      <div className="mx-16">
        <div className="flex flex-row justify-between gap-x-8 pt-8">
          <StatCard stat="12" description="Applications sent" />
          <StatCard stat="5" description="Awaiting response" />
          <StatCard stat="5" description="In progress" />
          <StatCard stat="5" description="Archived" />
          <StatCard stat="2" description="Offers received" />
          <StatCard stat="12" description="Response rate" />
        </div>

        <div className="mt-8">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
