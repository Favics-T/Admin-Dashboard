import React from 'react'
import AvatarStack from '../../../components/AvatarStack'
import { IoMdShare } from "react-icons/io";


const Kanban = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex p-8 shadow-xl rounded h-full bg-white w-full flex-col gap-6'>

        {/* subheader */}
        <div className='flex pb-3 justify-between w-full border-b border-[#DBDCDE]'>
            {/* left section */}
            <div className=''>
              <h1 className='Lato text-[#3A3541]'>Overview</h1>
              <p className='text-[#89868D]'>Edit or modify all card as you want</p>
            </div>

            {/* right section */}
            <div className='flex flex-col gap-2'>
              <h1 className='text-[#3a3541]'>Team Members:</h1>
              <div className='flex items-center gap-2'>
                <AvatarStack />
                <div className='bg-[#F4F5F9] p-2 rounded-full '>
                  <IoMdShare  className='text-[#6E39CB] text-2xl'/>
                </div>
                
                
              </div>
            </div>
        </div>

        {/* search */}
        <div>

        </div>

        {/* kanban */}
        <div>

        </div>
      </div>
    </div>
  )
}

export default Kanban
