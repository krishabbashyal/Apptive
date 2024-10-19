import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
// import Navbar from "@/components/Navbar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex w-full flex-col">
        {/* Navbar */}
        {/* <Navbar /> */}
        <div className="flex h-full w-full items-center justify-center bg-background">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
