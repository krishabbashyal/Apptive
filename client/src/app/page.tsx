import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
// import FeatureCard from '@/components/LandingPage/FeatureCard'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-row h-[calc(100vh-6rem)] w-full bg-foreground'>
        <div className='w-3/5'>
          <div className='mx-32'>
            <div className='mt-16'>
              <h1 className='text-8xl 2xl font-semibold'>Applications</h1>
              <h1 className='text-8xl font-semibold'>Managed</h1>
              <h1 className='text-8xl font-semibold'>Easily</h1>
            </div>

            <div>
              <p className='text-3xl font-medium mt-10 text-cadetGrayLight'>Elevate your job search with a tool that helps you stay organized and on top</p>
            </div>
            <div>
            <button className='text-xl bg-white text-black font-semibold px-6 py-2.5 rounded-lg mt-10'>Get started</button>
            </div>
            {/* <div className='mt-16 flex flex-row gap-x-16 absolute'>
              <FeatureCard title="No more messy spreadsheets" description="Tired of juggling endless rows and columns? Say goodbye to confusing spreadsheets and hello to an easy-to-use dashboard." />
              <FeatureCard title="All the information you need in one place" description="Everything you need for each application is right at your fingertips. Store descriptions, company details, deadlines, interview notes, and more!" />
              <FeatureCard title="Gain valuable insights about your search" description="Track your search progress with detailed metrics. See how many applications you’ve submitted, how often you get callbacks, and identify trends over time." />
              <FeatureCard title="Visualize how your search is going" description="Turn your data into actionable insights with clear, visual representations. Our app helps you see the bigger picture with charts and graphs" />

            </div> */}
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