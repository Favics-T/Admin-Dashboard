import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LuMenu, LuX } from "react-icons/lu";
import { SideBarContext } from "../Context/SideBarContext";
import SideBar from './SideBar';

const routeTitleMap = {
  '/home': 'Dashboard',
  '/dashboard': 'Dashboard',
  '/notifications': 'Notifications',
  '/analytics': 'Analytics',
  '/Authentication': 'Authentication',
  '/E-commerce': 'E-Commerce',
  '/pages/profileoverview':'Profile/Profile Overview',
  '/users/newuser':'User/New User',
  '/users/report':"User/Report"

};

const NavBar = () => {
  const { pathname } = useLocation();
  const { menuWithIds } = useContext(SideBarContext);
  const [view, setView] = useState(false);

  const title = routeTitleMap[pathname] || 'Dashboard';

  return (
    <nav className="flex items-center justify-between md:justify-start gap-4 md:gap-10 w-full relative">
      
      
      <h1 className="text-[#6E39CB] font-lato text-lg md:text-2xl whitespace-nowrap">
        {title}
      </h1>

      
      <div className="hidden md:block flex-1 max-w-md">
        <input
          type="text"
          placeholder="Search anything here"
          className="bg-white border border-[#DBDCDE] rounded-full w-full px-4 py-2 text-sm text-gray-500 focus:outline-none focus:border-[#6E39CB]"
        />
      </div>

      
      <button
        className="md:hidden text-2xl text-[#6E39CB]"
        aria-label="Toggle menu"
        onClick={() => setView(true)}
      >
        <LuMenu />
      </button>

      
      {view && (
        <div className="fixed inset-0 bg-black/50 z-50 flex">
          <div className="bg-white w-64 p-4 flex flex-col gap-4 h-full overflow-y-auto">
            
            
            <button
              className="self-end text-2xl text-[#6E39CB]"
              aria-label="Close menu"
              onClick={() => setView(false)}
            >
              <LuX />
            </button>

            
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-100 border border-gray-300 rounded-full w-full px-4 py-2 text-sm text-gray-500 focus:outline-none focus:border-[#6E39CB]"
            />

            
            <nav className="flex flex-col gap-2">
              {menuWithIds.map((item) => (
                <button
                  key={item.id}
                  className="text-left px-2 py-1 rounded hover:bg-gray-100"
                  onClick={() => setView(false)}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </div>
        </div>
        // <SideBar />
      )}
    </nav>
  );
};

export default NavBar;
