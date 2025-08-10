import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const MainLayout = () => {
  return (
    <div className="bg-[#F4F5F9] min-h-screen">
      <div className="flex flex-col md:flex-row px-4 md:gap-9">
        
        {/* Sidebar */}
        <div className="w-full md:w-[18%] mb-4 md:mb-0">
          <SideBar />
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-1 md:pl-5 md:gap-8 gap-4">
          <NavBar />
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default MainLayout;
