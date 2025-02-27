"use server";

import React from "react";
import StatCard from "./StatCard";
import { fetchAllActiveApplications } from "@/app/(main)/actions";
import { fetchAllArchivedApplications } from "@/app/(main)/actions";

const StatCardContainer = async () => {
  const activeApplications = await fetchAllActiveApplications();
  const archivedApplications = await fetchAllArchivedApplications();

  const allApplications = [...activeApplications, ...archivedApplications];

  const awaitingResponse = activeApplications.filter(
    (application) => application.application_status === "Applied",
  ).length;

  const interviewing = activeApplications.filter(
    (application) => application.application_status === "Interviewing",
  ).length;

  const rejected = allApplications.filter(
    (application) => application.application_status === "Rejected",
  ).length;

  const offers = activeApplications.filter(
    (application) => application.application_status === "Accepted",
  ).length;

  const responseRate =
    (allApplications.filter((application) => application.had_response).length /
      allApplications.length) *
    100;

  const totalInterviews = allApplications.filter(
    (application) => application.had_response,
  ).length;

  return (
    <div className="flex flex-row justify-between gap-x-8 pt-8">
      <StatCard stat={allApplications.length} description="Total Applications" />
      <StatCard stat={awaitingResponse} description="Awaiting Response" />
      <StatCard stat={interviewing} description="Interviewing" />
      <StatCard stat={rejected} description="Rejected" />
      <StatCard stat={totalInterviews} description="Total Interviews" />
      <StatCard stat={offers} description="Offers Received" />
      <StatCard stat={responseRate} description="Interview Rate" />
    </div>
  );
};

export default StatCardContainer;
