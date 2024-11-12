import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";


const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row min-h-screen w-full">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex w-full">
        <div className="h-full w-full bg-red-200 flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
