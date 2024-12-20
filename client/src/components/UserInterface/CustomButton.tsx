import React from 'react' 
import { IconProps } from '@phosphor-icons/react'  

interface CustomButtonProps {   
  label: string   
  customClasses?: string
  onClick?: () => void   
  icon?: React.ComponentType<IconProps> 
  iconSide?: 'left' | 'right'
  textClasses?: string
}  

const CustomButton = ({ 
  label, 
  customClasses,
  textClasses,
  icon: Icon, 
  iconSide = 'left',
  onClick 
}: CustomButtonProps) => {   
  return (     
    <button 
      className={`h-10 px-4 rounded-lg hover:bg-opacity-80 text-white ${customClasses}`}
      onClick={onClick}
    >     
      <div className={`flex flex-row items-center justify-center gap-x-2 ${iconSide === 'right' && 'flex-row-reverse'}`}>       
        {Icon && <Icon size={24} />}       
        <p className={`font-medium ${textClasses}`}>{label}</p>     
      </div>   
    </button>   
  ) 
}  

export default CustomButton