import React from 'react'
import Navbar from './navbar'
import Main from './main'
import { Outlet } from 'react-router-dom'
import MobileBotNav from './mobileBotNav'

function Landing() {
  return (
    <div className='flex flex-col w-full h-100'>
      <div className='w-full'>
        <Navbar />
      </div>
      <div className='w-full min-h-screen '>
        <Outlet />
      </div>
      <MobileBotNav />
    </div>
  )
}

export default Landing