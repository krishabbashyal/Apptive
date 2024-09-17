import React from "react";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <Sidebar/>
        </div>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
