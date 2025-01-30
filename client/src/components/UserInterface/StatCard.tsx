import React from 'react'

interface StatCardProps {
  stat: number | string
  description: string
}

const StatCard = ({stat, description}: StatCardProps) => {
  return (
    <div className='flex flex-col flex-grow bg-foreground rounded-xl py-6 text-center hover:text-accent hover:ring-[2px] hover:ring-accent/50'>
      <p className='text-3xl font-semibold'>{description === 'Interview Rate' ? stat + '%' : stat}</p>
      <p className='text-lg font-light mt-2'>{description}</p>  
    </div>
  )
}

export default StatCard