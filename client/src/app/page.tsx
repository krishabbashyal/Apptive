import React from 'react'
import Navbar from '@/components/Navbar/Navbar'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-row h-[calc(100vh-6rem)] w-full bg-foreground'>
        <div className='w-3/5'>
          <div className='mx-32'>
            <div className='mt-16'>
              <h1 className='text-8xl font-semibold'>Applications</h1>
              <h1 className='text-8xl font-semibold'>Managed</h1>
              <h1 className='text-8xl font-semibold'>Easily</h1>
            </div>

            <div>
              <p className='text-3xl font-medium mt-10 text-cadetGrayLight'>Elevate your job search with a tool that helps you stay organized and on top</p>
              <p className='text-2xl font-medium mt-4 text-cadetGrayLight'>Track and manage all your applications in one place, eliminating the need for clunky spreadsheets. Say goodbye to endless rows and columns, and enjoy a streamlined experience designed for efficiency. </p>
            </div>
            <div>
            <button className=' text-xl bg-white text-black font-semibold px-6 py-2.5 rounded-lg mt-6'>Get started</button>
            </div>
          </div>
        </div>
        <div className='w-2/5 bg-background'>
          Right Side Content
        </div>
      </div>
    </div>
  )
}
export default LandingPage