import React from 'react'
import Navbar from '@/components/Navbar/Navbar'


const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col md:flex-row h-[calc(100vh-6rem)] w-full bg-foreground'>
        <div className='md:w-3/5'>
          <div className='mx-4 md:mx-32'>
            <div className='mt-10 md:mt-16'>
              <h1 className='text-5xl md:text-6xl lg:text-8xl font-semibold'>Applications</h1>
              <h1 className='text-5xl md:text-6xl lg:text-8xl font-semibold'>Managed</h1>
              <h1 className='text-5xl md:text-6xl lg:text-8xl font-semibold'>Easily</h1>
            </div>

            <div>
              <p className='text-xl md:text-3xl font-medium mt-4 md:mt-10 text-cadetGrayLight'>Elevate your job search with a tool that helps you stay organized and on top</p>
            </div>
            <div>
            <button className='text-xl bg-white text-black font-semibold px-6 py-2.5 rounded-lg mt-4 md:mt-10'>Get started</button>
            </div>
          </div>
        </div>
        <div className='md:w-2/5 mt-8 md:mt-0 bg-background'>
          Right Side Content
        </div>
      </div>
    </div>
  )
}
export default LandingPage