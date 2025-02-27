"use server";

import React from "react";
import { fetchAllArchivedApplications } from "@/app/(main)/actions";
import RecentArchive from "./RecentArchive";

const RecentArchiveContainer = async () => {
  const data = await fetchAllArchivedApplications();

  return <RecentArchive applicationData={data} />;
};

export default RecentArchiveContainer;
