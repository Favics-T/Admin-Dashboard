import React from 'react';
import { PiUsersFill } from "react-icons/pi";
import { RiCursorFill } from "react-icons/ri";
import { BsTags } from "react-icons/bs";
import { FaBox } from "react-icons/fa";

const cardList = [
  {
    title: "Users",
    icon: PiUsersFill,
    iconColor: "#6E39CB",
    count: "35k",
    iconBg: "bg-[#DECCFE]",
    progressBg: "bg-yellow-300"
  },
  {
    title: "Clicks",
    icon: RiCursorFill,
    iconColor: "#533FE4",
    count: "1m",
    iconBg: "bg-purple-200",
    progressBg: "bg-purple-400"
  },
  {
    title: "Sales",
    icon: BsTags,
    iconColor: "#F93131",
    count: "345$",
    iconBg: "bg-red-200",
    progressBg: "bg-red-400"
  },
  {
    title: "Items",
    icon: FaBox,
    iconColor: "#2DCCFF",
    count: "68",
    iconBg: "bg-blue-200",
    progressBg: "bg-blue-400"
  }
];

const Card = ({ icon: Icon, title, iconBg, count, progressBg, iconColor }) => {
  return (
    <div className='shadow-lg flex flex-col gap-5 p-4 rounded-lg'>
      {/* title */}
      <div className='flex gap-4 items-center'>
        {/* icon */}
        <div className={`${iconBg} p-2 rounded-lg`}>
          <Icon style={{ color: iconColor }} size={20} />
        </div>
        <h1 className='font-semibold'>{title}</h1>
      </div>

      <h1 className='text-3xl font-bold'>{count}</h1>

      {/* progress */}
      <div className='h-1 w-full bg-gray-200 rounded'>
        <div className={`h-1 ${progressBg} rounded`} style={{ width: "25%" }} />
      </div>
    </div>
  );
};

const UserCard = () => {
  return (
    <div className='grid md:grid-cols-4 gap-4 p-4'>
      {cardList.map((list, index) => (
        <Card key={index} {...list} />
      ))}
    </div>
  );
};

export default UserCard;
