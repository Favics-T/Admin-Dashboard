import React, { useContext, useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { SideBarContext } from "../Context/SideBarContext";
import { UserContext } from "../Context/UserContext";

const SideBar = () => {
  const { menuWithIds } = useContext(SideBarContext);
  const [activeId, setActiveId] = useState(null);

  const {formData} = useContext(UserContext)
  console.log(formData)
  const handleToggle = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  const renderMenu = (menu) => (
    <ul className="flex flex-col gap-8">
      {menu.map(({ id, title, icon: Icon, children, path }) => (
        <li key={id} className="flex flex-col">
          <div
            onClick={() => children && handleToggle(id)}
            className="flex items-center text-[#393541] justify-between cursor-pointer hover:bg-[#DECCFE] rounded-lg px-2 py-2"
          >
            <div className="flex  items-center gap-2">
              {Icon && <Icon className="text-2xl text-[#6e39cb]" />}
              {path ? (
                <Link to={path} className="text-[14.23px] ">
                  {title}
                </Link>
              ) : (
                <span className="text-sm">{title}</span>
              )}
            </div>
            {children && (
              activeId === id ? (
                <RiArrowDropUpLine className="text-xl" />
              ) : (
                <RiArrowDropDownLine className="text-xl" />
              )
            )}
          </div>
          {children && activeId === id && (
            <div className="ml-4">{renderMenu(children)}</div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <aside className="bg-white relative md:flex hidden flex-col p-6 h-screen">
      <div className="flex justify-center mb-6">
        <img src={Logo} alt="Logo" className="w-[78px] h-[53px]" />
      </div>
      {renderMenu(menuWithIds)}

      <div className="absolute bottom-4">
kk
      </div>
    </aside>
  );
};

export default SideBar;
