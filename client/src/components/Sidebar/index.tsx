import React from 'react'
import Image from 'next/image'

const SidebarProfileTab = () => {
  return (
    <div className='w-full h-24 rounded flex justify-center bg-background'>
      <div className='flex gap-x-4 mt-3.5 items-center'>
        <Image src="/images/profile.jpg" className='rounded-full' width={42} height={42} alt='Profile Picture' />
        <div>
          <p>Krishab Bashyal</p>
          <p className='text-xs -mt-0.5 text-gray-400'>Developer</p>
        </div>
      </div>
    </div>
  )
}

interface SidebarTabProps {
  label: string,
  customStyle?: string,
}

const SidebarTab = ({label}: SidebarTabProps) => {
  return (
    <div className='w-full h-12 rounded flex justify-center items-center bg-background'>
      <p>{label}</p>
    </div>
  )
}
const Sidebar = () => {
  return (
    <div className='w-64 min-h-screen bg-foreground flex flex-col'>
      <div className='flex flex-col mt-16 mx-4 flex-grow'>
        <SidebarProfileTab />
        <div className='flex mt-8 flex-col flex-grow'>
          <div className='flex flex-col gap-y-2 flex-grow'>
            <SidebarTab label="Dashboard"/>
            <SidebarTab label="Timeline"/>
            <SidebarTab label="Map"/>
            <SidebarTab label="Archive"/>
            <SidebarTab label="Settings"/>
          </div>
          {/* Spacer div to push the bottom tabs to the bottom */}
          <div className='flex-grow'></div>
          {/* End of comment */}
          <div className='mb-8 flex flex-col gap-y-2'>
            <SidebarTab label="Feedback"/>
            <SidebarTab label="Sign out"/>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Sidebar