import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const MainLayout = () => {
  return (
    <div className='bg-[#F4F5F9] '>
     <div className='flex px-4 md:gap-9'>
      <div className='w-[18%] '>
        <SideBar />
      </div>
      <div className='flex flex-col md:pl-5 md:gap-8 gap-4 md:flex-1'>
      <NavBar />
      <Outlet />
      </div>
      

     </div>
    </div>
  )
}

export default MainLayout
