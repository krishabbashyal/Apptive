"use client"

import React from 'react'
import SearchBar from './SearchBar'
import { Plus } from '@phosphor-icons/react'
import ApplicationTable from './ApplicationTable'
import CustomButton from './CustomButton'
import useShowApplicationModal from '@/lib/store/modalStore'

interface RecentActivityProps { }

const RecentActivity = ({}: RecentActivityProps) => {
  const { openApplicationModal } = useShowApplicationModal()
  
  return (
    <div className='bg-foreground rounded-xl border  border-spacer h-96'>
      <div className='py-6 mx-10'>
        <div className='flex flex-row justify-between'>
          <h1 className='text-3xl'>Recent Activity</h1>
          <div className='flex flex-row gap-x-4'>
            <SearchBar />
            <CustomButton onClick={openApplicationModal} label='Create' icon={Plus} />
          </div>
        </div>
      <div className='mt-10'>
        <ApplicationTable />
      </div>
      </div>
    </div>
  )
}

export default RecentActivity