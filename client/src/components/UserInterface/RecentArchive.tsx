'use client'

import React from 'react'
import { Application } from '@prisma/client'
import SearchBar from './SearchBar'
import CustomButton from './CustomButton'
import ArchivedApplicationTable from './ArchivedApplicationTable'

interface RecentArchiveProps {
  applicationData: Application[]
}

function RecentArchive({applicationData}: RecentArchiveProps) {
  return (
    <div className="h-full rounded-tr-xl rounded-tl-xl bg-foreground">
    <div className="mx-10 py-6">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl">Archived Applications</h1>
        <div className="flex flex-row gap-x-4">
          <SearchBar />
          <CustomButton
            onClick={() => console.log("Create button pressed")}
            label="Create"
            customClasses="bg-accent"
          />
        </div>
      </div>
      <div className="mt-8">
        <ArchivedApplicationTable applicationData={applicationData} />
      </div>
    </div>
  </div>
  )
}

export default RecentArchive