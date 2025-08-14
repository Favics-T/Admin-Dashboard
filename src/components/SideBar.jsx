import React, { useContext, useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { SideBarContext } from "../Context/SideBarContext";

const SideBar = () => {
  const { menuWithIds, isSidebarOpen, closeSidebar } = useContext(SideBarContext);
  const [activeId, setActiveId] = useState(null);

  if (!menuWithIds) return null;

  const handleToggle = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  const renderMenu = (menu) => (
    <ul className="flex flex-col gap-2">
      {menu.map(({ id, title, icon: Icon, children, path }) => (
        <li key={id} className="flex flex-col">
          <div
            onClick={() => children && handleToggle(id)}
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
            {children && (
              activeId === id ? (
                <RiArrowDropUpLine className="text-2xl text-[#6E39CB]" />
              ) : (
                <RiArrowDropDownLine className="text-2xl text-[#6E39CB]" />
              )
            )}
          </div>
          {children && activeId === id && (
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
      <aside className="bg-white hidden md:flex flex-col p-6 h-screen w-64 shadow-lg">
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
        className={`fixed top-0 left-0 w-64 bg-white shadow-xl z-50 h-full p-6 transform transition-transform duration-300 ${
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
