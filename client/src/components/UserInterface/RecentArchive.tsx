'use client'

import React, { useState } from 'react'
import { Application } from '@prisma/client'
import SearchBar from './SearchBar'
import CustomButton from './CustomButton'
import ArchivedApplicationTable from './ArchivedApplicationTable'

interface RecentArchiveProps {
  applicationData: Application[]
}

function RecentArchive({applicationData}: RecentArchiveProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = applicationData.filter(application =>
    application.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    application.location_city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    application.location_state.toLowerCase().includes(searchTerm.toLowerCase()) ||
    application.job_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    application.location_city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    application.application_status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full rounded-tr-xl rounded-tl-xl bg-foreground">
    <div className="mx-10 py-6">
      <div className="flex flex-row justify-between">
      <h1 className="text-3xl font-semibold text-gray-100">
            Archived Applications
          </h1>
        <div className="flex flex-row gap-x-4">
          <SearchBar onSearchChange={setSearchTerm} />
          <CustomButton
            onClick={() => console.log("Create button pressed")}
            label="Create"
            customClasses="bg-accent"
          />
        </div>
      </div>
      <div className="mt-8">
        <ArchivedApplicationTable applicationData={filteredData} />
      </div>
    </div>
  </div>
  )
}

export default RecentArchive