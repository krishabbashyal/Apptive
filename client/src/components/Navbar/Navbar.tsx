import React from 'react'





const Navbar = () => {
  return (
    <div className='w-full top-0 justify-center h-24 bg-foreground flex flex-col sticky z-50'>

      <div className='flex justify-between items-center mx-32'>
        {/* Logo */}
        <div>
          <p className='text-3xl font-bold '>Apptive</p>
        </div>
        <div className='flex w-full justify-center '>
          <ul className='flex gap-x-10 text-lg'>
            <button>Features</button>
            <button>Company</button>
            <button>Blog</button>
            <button>Help</button>
          </ul>
        </div>
        {/* Buttons */}
        <div className='flex flex-shrink-0 gap-x-6'>
          <button className='text-lg'>Log in</button>
          <button className=' text-lg bg-white text-black font-semibold px-3.5 py-1.5 rounded-full'>Sign up</button>
        </div>
      </div>



    </div>
  )
}

export default Navbar