import React from 'react'
import Navbar from './navbar'
import Main from './main'
import { Outlet } from 'react-router-dom'


function Landing() {
  return (
    <div className='flex flex-col w-full h-100'>
      <div className='w-full h-24 sm:h-full'>
        <Navbar />
      </div>
      <div className='w-full lg:min-h-screen '>
        <Outlet />
      </div>
    </div>
  )
}

export default Landing