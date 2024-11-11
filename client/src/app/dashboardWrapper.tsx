import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";


const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex w-full flex-col">
        <div className="h-full w-full bg-background">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
