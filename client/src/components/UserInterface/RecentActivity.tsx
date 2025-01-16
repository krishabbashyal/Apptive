"use client"

import React from 'react'
import SearchBar from './SearchBar'
import { Plus } from '@phosphor-icons/react'
import ApplicationTable from './ApplicationTable'
import CustomButton from './CustomButton'
import useShowApplicationModal from '@/lib/store/modalStore'
import { useState, useEffect } from 'react'
import { Application } from '@prisma/client'
import { fetchApplications } from '@/app/(main)/dashboard/actions'

interface RecentActivityProps { }



const RecentActivity = ({}: RecentActivityProps) => {
  const [data, setData] = useState<Application[]>([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const applications = await fetchApplications(); // Assuming this function fetches your data
        console.log('Fetched applications:', applications);
        setData(applications);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchData();
  }, []);

  const { openApplicationModal } = useShowApplicationModal()
  
  return (
    <div className='bg-foreground rounded-xl border  border-spacer h-96'>
      <div className='py-6 mx-10'>
        <div className='flex flex-row justify-between'>
          <h1 className='text-3xl'>Recent Activity</h1>
          <div className='flex flex-row gap-x-4'>
            <SearchBar />
            <CustomButton onClick={openApplicationModal} label='Create' customClasses='bg-accent' icon={Plus} />
          </div>
        </div>
      <div className='mt-10'>
        {/* This likley needs to be a data fetching component */}
        <ApplicationTable applicationData={data} />
      </div>
      </div>
    </div>
  )
}

export default RecentActivity