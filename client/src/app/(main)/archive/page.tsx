"use server";

import React from "react";
import RecentArchiveContainer from "@/components/UserInterface/RecentArchiveContainer";



const Archive = async () => {
  return (
    <div className="mx-16 pt-8 h-full">
      <RecentArchiveContainer />
    </div>
  )
};

export default Archive;
