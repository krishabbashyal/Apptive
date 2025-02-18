import React from 'react'
import { IconProps } from '@phosphor-icons/react'

interface FeatureCardProps {
  icon?: React.ComponentType<IconProps>,
  title: string,
  customClasses?: string
  description: string,
}

const FeatureCard = ({ title, icon: Icon, description, customClasses }: FeatureCardProps) => {
  return (
    <div className={`${customClasses} opacity-0`}>
      <div className="w-full bg-foreground pb-6 border border-accent/10 rounded-xl px-6 pt-4 transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-accentHighlight">
        <div className='flex flex-row gap-x-4 items-center'>
          {Icon && <Icon className='text-accent bg-accent/20 rounded-2xl p-3 transition duration-200 hover:bg-accent/5 hover:scale-110' size={56} />}
          <p className='text-2xl font-semibold'>{title}</p>
        </div>
        <p className='text-lg mt-4'>{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard
