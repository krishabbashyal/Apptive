import React from 'react'

interface FeatureCardProps {
  title: string,
  description: string,
}
const FeatureCard = ({title, description}: FeatureCardProps) => {
  return (
    <div className='w-80 h-96 bg-background rounded-xl p-6 text-spacer ring-4 ring-spacer hover:ring-accent '>
      <p className='text-2xl text-center pb-2 font-semibold border-b border-spacer '>{title}</p>
      <p className='font-medium mt-4'>{description}</p>
    </div>
  )
}

export default FeatureCard