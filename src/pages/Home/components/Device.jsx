import React from 'react'
import { CiMobile1 } from "react-icons/ci";
import { CiDesktop } from "react-icons/ci";
import { IoTabletPortrait } from "react-icons/io5";
import { RiTv2Fill } from "react-icons/ri";

const devices = [
  {icon: CiMobile1, device:'Mobile', perc:"96.42%"},
  {icon: CiDesktop, device:'Desktop', perc:"2.76%"},
  {icon: IoTabletPortrait, device:'Tablet', perc:"0.82%"},
  {icon: RiTv2Fill, device:'TV', perc:"12.3%"},
]

const DeviceCard =({icon:Icon, device, perc})=>{
  return(
    <div className='flex w-[200px] justify-between text-[#3A3541] text-[16px] lato items-center '>
        <div className='flex items-center gap-3  w-full '>         
         <div className='bg-[#F4F5F9] rounded-full p-2  '>
            <Icon className='text-[#6E39CB] text-[16px]'/>
          </div> 
          <p className='text-[]'>{device}</p>
        </div>
        <p>{perc}</p>
    </div>
  )
}

const Device = () => {
  return (
    <div className='bg-white text-[#3A3541] text-[16px] lato  cursor-pointer rounded-lg flex items-cente py-8 justify-center w-[250px] h-[340px]'>
      <div className='flex flex-col gap-8'>
        <h1 className='text-[#3A3541] font-medium text-[20.25px] lato'>Device Category</h1>
       <div className='flex   flex-col gap-8'>
        {
            devices.map(({icon,perc,device})=>(
              <DeviceCard key={device} icon={icon} device={device} perc={perc}/>
            ))
        }
       </div>
      </div>
    </div>
  )
}

export default Device
