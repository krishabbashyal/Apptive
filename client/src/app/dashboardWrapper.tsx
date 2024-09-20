import React from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex w-full flex-col bg-foreground">
        {/* Navbar */}
        <Navbar />
        <div className="w-full bg-background h-full">
        { children }

        </div>
      </div>
    </div>
  ); 
};

export default DashboardWrapper;
