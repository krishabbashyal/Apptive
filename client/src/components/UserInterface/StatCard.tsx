import React from 'react'

interface StatCardProps {
  stat: number
  description: string
}

const StatCard = ({stat, description}: StatCardProps) => {
  return (
    <div className='flex flex-col flex-grow bg-foreground rounded-xl pl-6 text-left hover:text-accent hover:ring-[2px] hover:ring-accent/25'>
      <p className='font-medium text-lg mt-3 '>{description}</p>  
      <p className='text-4xl font-semibold mt-3 pb-4'>{description === 'Interview Rate' ? Math.round(stat * 100) / 100  + '%' : stat}</p>
    </div>
  )
}

export default StatCard