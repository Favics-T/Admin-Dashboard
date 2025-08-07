import React, { useState } from 'react';
import { FaHome, FaFileAlt, FaChevronUp } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { LiaOpencart } from "react-icons/lia";
import { AiOutlineSafety } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import Logo from '../assets/Logo.png';

const list = [
  {
    name: "Home",
    icon: <FaHome />,
    children: [
      { title: 'Dashboard', path: '/dashboard' },
      { title: "Analytics", path: '/analytics' }
    ]
  },
  { name: "Pages", icon: <FaFileAlt />, children: [{title:'', path:""}] },
  { name: "Application", icon: <FaFolderOpen />, children: [{title:'', path:""}] },
  { name: "E-Commerce", icon: <LiaOpencart />, children: [{title:'', path:""}] },
  { name: "Authentication", icon: <AiOutlineSafety />, children: [{title:'', path:""}] }
];

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div className='w-full max-w-[250px] gap-8  pt-20 bg-white md:flex fixed hidden flex-col px-6 h-screen'>
      <div className='flex justify-center mb-6'>
        <img src={Logo} alt="Logo" className='w-[78px] h-[53px]' />
      </div>

      <ul className='flex flex-col gap-2 w-full'>
        {list.map(({ name, icon, children }, index) => (
          <li key={name} className='flex flex-col'>
            <div
              onClick={() => handleToggle(index)}
              className='flex items-center justify-between cursor-pointer hover:bg-[#DECCFE] w-full rounded-lg px-2 py-2 text-[#6E39CB]'
            >
              <div className='flex text-xl items-center gap-3'>
                {icon}
                <span className='text-lg'>{name}</span>
              </div>
              {children.length > 0 && (
                activeIndex === index ? <FaChevronUp /> : <RiArrowDropDownLine className='text-3xl' />
              )}
            </div>

            {activeIndex === index && children.length > 0 && (
              <ul className='ml-8 mt-1 text-sm text-gray-700'>
                {children.map(({ title, path }) => (
                  <li key={path} className='py-1 cursor-pointer text-[#3A3541] lato text-[16px] hover:text-[#6E39CB]'>
                    {title}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
