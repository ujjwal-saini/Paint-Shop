import React, { useState } from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import { Outlet } from 'react-router-dom'

function Landingadmin() {
  const [opensidebar, setopensidebar] = useState(false);
  console.log(opensidebar);
  return (
    <div className='h-screen flex bg-[#081226]'>
      <Sidebar opensidebar={opensidebar} setopensidebar={setopensidebar} />
      <div className='flex-1 lg:ml-72 flex flex-col'>
        <Navbar opensidebar={opensidebar} setopensidebar={setopensidebar} />
        <main className='flex-1 mt-20 overflow-y-auto'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Landingadmin