import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import ApplicationForm from '@/components/Forms/ApplicationForm'

const Dashboard = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='m-4'>
        <div className='h-full w-full bg-red-100'>
          <ApplicationForm />
        </div>
      </div>
    </div>
  )
}

export default Dashboard