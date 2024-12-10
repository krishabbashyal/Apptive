import React from 'react'

interface StatCardProps {
  stat: string
  description: string
}

const StatCard = ({stat, description}: StatCardProps) => {
  return (
    <div className='min-w-40 flex flex-col flex-grow bg-foreground rounded-xl py-6 border border-spacer hover:border-accent text-center'>
      <p className='text-3xl font-semibold'>{description === 'Response rate' ? stat + '%' : stat}</p>
      <p className='font-medium text-lg mt-2'>{description}</p>  
    </div>
  )
}

export default StatCard