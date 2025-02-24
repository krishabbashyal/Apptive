import React from "react";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
// import BreakpointInfo from "../components/DevTools/BreakpointInfo";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen bg-background text-white">
        {/* <BreakpointInfo /> */}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
