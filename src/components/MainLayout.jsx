import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const MainLayout = () => {
  return (
    <div className='bg-[#F4F5F9] '>
     <div className='flex  gap-9'>
      <div className='w-[18%] '>
        <SideBar />
      </div>
      <div className='flex flex-col pl-5 gap-8 flex-1'>
      <NavBar />
      <Outlet />
      </div>
      

     </div>
    </div>
  )
}

export default MainLayout
