"use client"

import React from 'react'
import SearchBar from './SearchBar'
import { Plus } from '@phosphor-icons/react'
import ApplicationTable from './ApplicationTable'

interface RecentActivityProps { }

const RecentActivity = ({}: RecentActivityProps) => {
  return (
    <div className='bg-foreground rounded-xl border  border-spacer h-96'>
      <div className='py-6 mx-10'>
        <div className='flex flex-row justify-between'>
          <h1 className='text-3xl'>Recent Activity</h1>
          <div className='flex flex-row gap-x-4'>
            <SearchBar />
            <button className='h-10 px-4 bg-accent rounded-lg text-white'>
              <div className='flex flex-row gap-x-2'>
                <Plus size={24} />
                <p className='font-medium'>Create</p>
              </div>
            </button>
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