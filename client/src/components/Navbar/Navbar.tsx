"use client"

import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='w-full top-0 justify-center h-24 bg-foreground flex flex-col sticky z-50'>

      <div className='flex justify-between items-center mx-32'>
        {/* Logo */}
        <div>
          <p className='text-3xl font-bold '>Apptive</p>
        </div>
        {/* Buttons */}
        <div className='flex flex-shrink-0 gap-x-6'>
          <Link href={"/login"}  className='text-lg bg-cadetGrayDark px-3.5 py-1.5 rounded-lg font-semibold'>Log in</Link>
          <Link href={"/signup"} className=' text-lg bg-white text-black font-semibold px-3.5 py-1.5 rounded-lg'>Sign up</Link>
        </div>
      </div>



    </div>
  )
}

export default Navbar