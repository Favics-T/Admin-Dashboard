import React from 'react'
import { CiSettings } from "react-icons/ci";
import { HiMiniUsers } from "react-icons/hi2";

const MyProfile = () => {
  return (
    <div className='flex p-4'>
        <div className='flex flex-col gap-4 w-full '>
            {/* Subheader section */}
            <div className='flex justify-between text-[20.22px] items-center  w-full'>
                <h1 className=''>My Profile</h1>
                <div className='flex gap-2 text-[#89868D]'>
                    <CiSettings />
                    <HiMiniUsers />
                </div>
            </div>

            {/* Image */}
            <div>

            </div>

            {/* Traing  */}
            <div>

            </div>

            {/* Hashtag */}
            <div>

            </div>

            {/* list */}
            <div>

            </div>

        </div>
          </div>
  )
}

export default MyProfile
