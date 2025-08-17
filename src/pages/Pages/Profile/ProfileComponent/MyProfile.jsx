import React from 'react'
import { CiSettings } from "react-icons/ci";
import { HiMiniUsers } from "react-icons/hi2";
import { Icons } from '../../../../utils/icon';
import Image from '../asset/Profile.png'

const list = [
  { title: 'Sport & Health', items: ['#sport', '#fit', '#health'] },
  { title: 'Animals', items: ['#animal', '#nature', '#health'] },
  { title: 'Beauty', items: ['#beauty', '#makeup', '#fashion'] },
  { title: 'Art', items: ['#art', '#artist', '#love'] },
];

const ListCard = ({ title, items = [], icon: Icon }) => {
  return (
    <div className='flex justify-between items-start gap-4'>
      <div>
        <h1 className='font-bold text-[14px]'>{title}</h1>
        <div className='flex gap-4'>
          {items.map((child, i) => (
            <li key={i} className='list-none text-[#89868D] text-[10px]'>
              {child}
            </li>
          ))}
        </div>
      </div>
      {Icon && <Icon className="text-[#6E39CB] text-4xl" />}
    </div>
  )
}

const MyProfile = () => {
  const DropDown = Icons.dropdown;

  return (
    <div className='flex p-4'>
      <div className='flex flex-col gap-10 w-full'>
        {/* Subheader section */}
        <div className='flex justify-between text-[20.22px] items-center w-full'>
          <h1>My Profile</h1>
          <div className='flex gap-2 text-[#89868D]'>
            <CiSettings />
            <HiMiniUsers />
          </div>
        </div>

        {/* Image */}
        <div className='flex flex-col gap-2 justify-center items-center'>
          <div className=' rounded-full bg-purple-300'>
            <img src={Image} alt="" />
          </div>
          <h1>Alice Turner</h1>
        </div>

        {/* Training */}
        <div className='flex flex-col gap-3'>
          <h1 className='Lato text-[16px]'>VIP Training Course</h1>
          <div className='flex gap-2 items-center'>
            <p className='text-[#6E39CB]'>10%</p>
            <div className='h-3 rounded-2xl w-full flex overflow-hidden'>
              <div className='bg-[#6E39CB] rounded-l-2xl h-full flex-[3] ' />
              <div className='bg-[#D3BBFE] h-full flex-[7] rounded-r-2xl' />
            </div>
          </div>
        </div>

        {/* Hashtag */}
        <div className='text-2xl flex justify-between items-center'>
          <h1 className='text-lg'>Hashtags Sets</h1>
          <div className='bg-[#d3bbfe] p-2 rounded-full text-[#6e39cb]'>
            <CiSettings />
          </div>
        </div>

        {/* list */}
        <div className='flex flex-col gap-4'>
          {list.map(({ title, items }, idx) => (
            <ListCard key={idx} title={title} items={items} icon={DropDown} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyProfile
