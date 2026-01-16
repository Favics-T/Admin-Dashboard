import React, { useContext, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { LuMenu, LuX } from "react-icons/lu";
import { SideBarContext } from "../Context/SideBarContext";

const routeTitleMap = {
  '/home': 'Dashboard',
  '/home/analytics': 'Analytics',
  '/home/talents':"Talents",
  '/dashboard': 'Dashboard',
  '/pages/profile/teams': 'Profile/Team',
  '/pages/profile/profileoverview': 'Profile/Profile Overview',
   '/pages/profile/allprojects': 'Profile/All Projects',
    '/pages/users/newuser': 'User/New User',
  '/pages/users/report': "User/Report",
  '/pages/account/setting':"Account/Setting",
  '/pages/account/billing':"Account/Billing",
   '/pages/account/invoice':"Account/Invoice",
    '/pages/account/security':"Account/Security",
    "/pages/projects/general":"Projects/General",
     "/pages/projects/timeline":"Projects/Timeline",
      "/pages/projects/newproject":"Projects/New Project",
      "/pages/pricingpage":"Pricing Page",
      "/pages/charts":"Charts",
      "/pages/notification":"Notifications",
      "/pages/pricingpage":"Pricing Page",
       "/pages/chats":"Chats",
        "/application/kanban":"Kanban",
    "/application/wizard":"Wizard",
    "/application/datatables":"Data Tables",
    "/application/calendar":"Calendar",
 
  '/e-commerce/overview/orders/orderdetail': 'Order Details',
  '/e-commerce/overview/orders/orderlist':"Order List",
  
  
  "/e-commerce/overview/products/newproduct":"New Product",
  "/e-commerce/overview/products/editproduct":'Edit Product'


};

const NavBar = () => {
  const { pathname } = useLocation();
  const { menuWithIds, sidebarToggle, activeIds, closeSidebar } = useContext(SideBarContext);
  const [view, setView] = useState(false);

  const title = routeTitleMap[pathname] || 'Dashboard';

  
  const renderMenu = (menu) => (
    <ul className="flex flex-col gap-2">
      {menu.map(({ id, title, children, path }) => (
        <li key={id} className="flex flex-col">
          <div
            onClick={() => children && sidebarToggle(id)}
            className="flex items-center justify-between cursor-pointer hover:bg-gray-100 px-3 py-2 rounded"
          >
            {path ? (
              <Link
                to={path}
                className="text-sm text-[#3A3541]"
                onClick={() => {
                  closeSidebar();
                  setView(false); 
                }}
              >
                {title}
              </Link>
            ) : (
              <span className="text-sm text-[#3A3541]">{title}</span>
            )}

            {children && (
              <span className="text-[#6E39CB] text-lg">
                {activeIds[id] ? "−" : "+"}
              </span>
            )}
          </div>

          {/* Render nested children if active */}
          {children && activeIds[id] && (
            <div className="ml-4 border-l pl-3 border-[#EEEAF7]">
              {renderMenu(children)}
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="flex items-center justify-between md:justify-start gap-4 md:gap-10 w-full relative">
      {/* Page Title */}
      <h1 className="text-[#6E39CB] font-lato text-lg md:text-2xl whitespace-nowrap">
        {title}
      </h1>

      {/* Desktop Search */}
      <div className="hidden md:block flex-1 max-w-md">
        <input
          type="text"
          placeholder="Search anything here"
          className="bg-white border border-[#DBDCDE] rounded-full w-full px-4 py-2 text-sm text-gray-500 focus:outline-none focus:border-[#6E39CB]"
        />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl text-[#6E39CB]"
        aria-label="Toggle menu"
        onClick={() => setView(true)}
      >
        <LuMenu />
      </button>

      {/* Mobile Sidebar Overlay */}
      {view && (
        <div className="fixed inset-0 bg-black/50 z-50 flex">
          <div className="bg-white w-64 p-4 flex flex-col gap-4 h-full overflow-y-auto">
            
            {/* Close Button */}
            <button
              className="self-end text-2xl text-[#6E39CB]"
              aria-label="Close menu"
              onClick={() => setView(false)}
            >
              <LuX />
            </button>

            {/* Mobile Search */}
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-100 border border-gray-300 rounded-full w-full px-4 py-2 text-sm text-gray-500 focus:outline-none focus:border-[#6E39CB]"
            />

            {/* Recursive Menu Renderer */}
            <nav>{renderMenu(menuWithIds)}</nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
