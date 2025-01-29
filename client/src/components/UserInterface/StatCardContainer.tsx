'use server'

import React from 'react'
import StatCard from './StatCard'
import { fetchAllActiveApplications } from "@/app/(main)/dashboard/actions";
import { fetchAllArchivedApplications } from '@/app/(main)/dashboard/actions';



const StatCardContainer = async () => {
  const activeApplications = await fetchAllActiveApplications();
  const archivedApplications = await fetchAllArchivedApplications();

  const allApplications = [...activeApplications, ...archivedApplications];

  const awaitingResponse = activeApplications.filter(
    (application) => application.application_status === "Applied"
  ).length;

  const inProgress = activeApplications.filter(
    (application) => application.application_status === "Interviewing"
  ).length

  const rejected = activeApplications.filter(
    (application) => application.application_status === "Rejected"
  ).length + archivedApplications.length

  const offers = activeApplications.filter(
    (application) => application.application_status === "Accepted"
  ).length

  return (
    <div className="flex flex-row justify-between gap-x-8 pt-8">
    <StatCard stat={allApplications.length} description="Applications sent" />
    <StatCard stat={awaitingResponse} description="Awaiting response" />
    <StatCard stat={inProgress} description="In progress" />
    <StatCard stat={rejected} description="Rejected" />
    <StatCard stat={offers} description="Offers received" />
    <StatCard stat="12" description="Response rate" />
  </div>
  )
}

export default StatCardContainer