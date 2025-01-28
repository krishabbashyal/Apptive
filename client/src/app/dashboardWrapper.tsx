import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";


const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="flex flex-col w-[15rem] h-screen fixed bg-foreground">
        <Sidebar />
      </div>
      <div className="flex w-full pl-[15rem]">
        <div className="h-full w-full bg-background">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
