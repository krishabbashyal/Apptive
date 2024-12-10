import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";


const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row min-h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="flex w-full">
        <div className="h-full w-full bg-background">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
