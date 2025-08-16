import React, { useContext } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { SideBarContext } from "../Context/SideBarContext";

const SideBar = () => {
  const { menuWithIds, isSidebarOpen, closeSidebar, activeIds, sidebarToggle } =
    useContext(SideBarContext);

  if (!menuWithIds) return null;

  const renderMenu = (menu) => (
    <ul className="flex flex-col gap-2 overflow-x-hidden">
      {menu.map(({ id, title, icon: Icon, children, path }) => (
        <li key={id} className="flex flex-col">
          {/* Parent item */}
          <div
            onClick={() => children && sidebarToggle(id)}
            className="flex items-center justify-between cursor-pointer hover:bg-[#F4F4F7] rounded-lg px-3 py-2"
          >
            <div className="flex items-center gap-3">
              {Icon && <Icon className="text-xl text-[#6E39CB]" />}
              {path ? (
                <Link
                  to={path}
                  className="text-sm text-[#3A3541]"
                  onClick={closeSidebar}
                >
                  {title}
                </Link>
              ) : (
                <span className="text-sm text-[#3A3541]">{title}</span>
              )}
            </div>

            {/* Arrow toggle */}
            {children && (
              activeIds[id] ? (
                <RiArrowDropUpLine className="text-2xl text-[#6E39CB]" />
              ) : (
                <RiArrowDropDownLine className="text-2xl text-[#6E39CB]" />
              )
            )}
          </div>

          {/* Render children if active */}
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
    <>
      {/* Desktop Sidebar */}
      <aside className="bg-white hidden md:flex flex-col p-6 h-screen w-64 shadow-lg overflow-y-auto">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Logo" className="w-[78px] h-[53px]" />
        </div>
        {renderMenu(menuWithIds)}
      </aside>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeSidebar}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-64 bg-white shadow-xl z-50 h-full p-6 transform transition-transform duration-300 overflow-y-auto ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Logo" className="w-[78px] h-[53px]" />
        </div>
        {renderMenu(menuWithIds)}
      </aside>
    </>
  );
};

export default SideBar;
