import React from 'react' 
import { IconProps } from '@phosphor-icons/react'  

interface CustomButtonProps {   
  label: string   
  onClick?: () => void   
  icon?: React.ComponentType<IconProps> 
}  

const CustomButton = ({ 
  label, 
  icon: Icon, 
  onClick 
}: CustomButtonProps) => {   
  return (     
    <button 
      className='h-10 px-4 bg-accent rounded-lg text-white'
      onClick={onClick}
    >     
      <div className='flex flex-row items-center gap-x-2'>       
        {Icon && <Icon size={24} />}       
        <p className='font-medium'>{label}</p>     
      </div>   
    </button>   
  ) 
}  

export default CustomButton