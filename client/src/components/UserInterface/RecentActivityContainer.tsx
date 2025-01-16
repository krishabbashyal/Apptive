"use server";

import React from "react";
import RecentActivity from "./RecentActivity";
import { fetchApplications } from "@/app/(main)/dashboard/actions";

const RecentActivityContainer = async () => {
  const data = await fetchApplications();

  return <RecentActivity applicationData={data} />;
};

export default RecentActivityContainer;
