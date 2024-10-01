import React from "react";
import "./globals.css";

import DashboardWrapper from "./dashboardWrapper";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
