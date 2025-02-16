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
      <div className="w-full bg-foreground h-52 border border-accent/10 rounded-xl px-6 pt-6 transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-accentHighlight">
        <div className='flex flex-row gap-x-4 items-center border-b border-spacer/40 pb-2.5'>
          {Icon && <Icon className='text-accent bg-accent/10 rounded-full p-2.5 transition duration-200 hover:bg-accent/20 hover:scale-110' size={48} />}
          <p className='text-2xl font-semibold'>{title}</p>
        </div>
        <p className='text-lg mt-3'>{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard
