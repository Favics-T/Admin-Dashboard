import React from 'react'
import { useLocation } from 'react-router-dom';
import { LuMenu } from "react-icons/lu";


const routeTitleMap = {
  '/dashboard': 'Dashboard',
  '/notifications': 'Notifications',
  '/analytics': 'Analytics',
  '/Authentication': 'Authentication',
  '/E-commerce': 'E-Commerce',
  
};
const NavBar = () => {
  const {pathname} = useLocation();

  const title = routeTitleMap[pathname] || 'Dashboard';
  return (
    <div className=' md:pt-6 pt-2 md:justify-start justify-between flex md:gap-20 gap-4 items-center'>
    <h1 className='text-[#6E39CB] Lato md:text-2xl'> {title} </h1>  
      <input type="text" placeholder='Search anything here'  
      className='bg-white md:block hidden md:p-2 text-[#DBDCDE] border p-1 rounded-full md:w-96'/>
<LuMenu className='md:hidden block'/>

    </div>
  )
}

export default NavBar
