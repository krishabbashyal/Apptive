import React from "react";
import SideNavbar from "@/components/Sidebar/SideNavbar";
// import Navbar from "@/components/Navbar";


const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <SideNavbar />
      <div className="flex w-full flex-col">
        {/* Navbar */}
        {/* <Navbar /> */}
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
