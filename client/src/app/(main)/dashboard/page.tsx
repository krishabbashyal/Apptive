import React from 'react'

import ApplicationForm from '@/components/Forms/ApplicationForm'
import StatCard from '@/components/UserInterface/StatCard'

const Dashboard = () => {
  return (
    <div className='w-full h-full'>
      {/* <ApplicationForm /> */}
      <div className='mx-16'>
        <div className='flex flex-row justify-between mt-8 gap-x-8'>
            <StatCard stat='12' description='Applications sent' />
            <StatCard stat='5' description='Awaiting response' />
            <StatCard stat='5' description='In progress' />
            <StatCard stat='5' description='Archived' />
            <StatCard stat='2' description='Offers received' />
            <StatCard stat='12' description='Response rate' />
        </div>
      </div>
    </div>
  )
}

export default Dashboard