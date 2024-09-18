import React from "react";
import "./globals.css";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
