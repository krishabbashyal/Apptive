import React from 'react'
import Image from 'next/image'

const SidebarProfileTab = () => {
  return (
    <div className='w-full h-24 rounded flex justify-center bg-background'>
      <div className='flex gap-x-4 items-center'>
        <Image src="/images/profile.jpg" className='rounded-full' width={42} height={42} alt='Profile Picture' />
        <div>
          <p>Krishab Bashyal</p>
          <p className='text-xs text-gray-400'>Developer</p>
        </div>
      </div>
    </div>
  )
}
const SidebarTab = () => {
  return (
    <div className='w-full h-11 rounded flex justify-center items-center bg-background'>
      <p>Tab</p>
    </div>
  )
}
const Sidebar = () => {
  return (
    <div className='w-64 min-h-screen bg-foreground flex flex-col'>
      <div className='flex flex-col gap-4 mt-32 mx-4'>
        <SidebarProfileTab />
        <SidebarTab />
        <SidebarTab />
        <SidebarTab />
        <SidebarTab />
        <SidebarTab />
      </div>
    </div>
  )
}

export default Sidebar