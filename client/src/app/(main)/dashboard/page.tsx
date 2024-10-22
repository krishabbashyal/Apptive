import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import ApplicationForm from '@/components/Forms/ApplicationForm'

const Dashboard = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='m-4'>
        <ApplicationForm />
      </div>
    </div>
  )
}

export default Dashboard