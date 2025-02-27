"use server";

import React from "react";
import RecentActivity from "./RecentActivity";
import { fetchAllActiveApplications } from "@/app/(main)/actions";

const RecentActivityContainer = async () => {
  const data = await fetchAllActiveApplications();

  return <RecentActivity applicationData={data} />;
};

export default RecentActivityContainer;
