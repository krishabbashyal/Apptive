import React from 'react'
import { CaretLeft } from '@phosphor-icons/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const BackButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button 
      className="absolute" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
      onClick={router.back}
    >
      <div className="bg-accentHighlight p-1 flex flex-row items-center rounded-full overflow-hidden">
        <CaretLeft 
          size={24} 
          color={isHovered ? "#E05555" : "#FFFFFF"} 
          weight="bold" 
          className="transition-colors duration-200"
        />
        <div className={`
          transform transition-all duration-200 ease-in-out
          ${isHovered ? 'translate-x-0 opacity-100 max-w-20' : '-translate-x-4 opacity-0 max-w-0'}
        `}>
          <p className={`
            font-semibold whitespace-nowrap pr-3 mt-0.5
            ${isHovered ? "text-danger" : "text-white"}
            transition-colors duration-200
          `}>
            Go Back
          </p>
        </div>
      </div>
    </button>
  )
}

export default BackButton