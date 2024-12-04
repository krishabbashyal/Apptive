import React from 'react'

import Image from 'next/image'

interface OAuthProviderProps {
  icon: string,
  label: string
}


const OAuthProvider = ({ icon, label }: OAuthProviderProps) => {
  return (
    <div className='flex h-10 w-full items-center cursor-pointer border hover:ring-1 ring-accent border-spacer justify-center space-x-2 rounded' >
      <Image src={icon} width={28} height={28} alt="Logo"></Image>
      <p className='font-medium text-base'>{label}</p>
    </div>
  )
}

export default OAuthProvider