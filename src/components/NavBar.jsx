import React from 'react'
import { useLocation } from 'react-router-dom';

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
    <div className=' pt-8 flex gap-20 items-center'>
    <h1 className='text-[#6E39CB] Lato text-2xl'> {title} </h1>  
      <input type="text" placeholder='Search anything here'  className='bg-white p-2 text-[#DBDCDE] border rounded-full md:w-96'/>
    </div>
  )
}

export default NavBar
