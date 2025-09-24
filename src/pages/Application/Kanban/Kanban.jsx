import React, { useState } from 'react'
import AvatarStack from '../../../components/AvatarStack'
import { IoMdShare } from "react-icons/io";
import { Search, Calendar, ChevronDown } from "lucide-react";


const Kanban = () => {
  const [selectedDate, setSelectedDate] = useState("2021-04-12");
  const [query, setQuery] = useState("");

  const handleDateChange=(e)=>{
    setSelectedDate(e.target.value);
  };

  const formattedDate = new Date(selectedDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

    return (
    <div className='w-full h-full'>
      <div className='flex p-8 shadow-xl rounded h-full bg-white w-full flex-col gap-2'>

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
        <div className='flex justify-between items-center'>
          {/* left div */}
          <div>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4 p-4 bg-gray-50 rounded-lg">
      {/* Search Input */}
      <div className="relative w-full max-w-sm">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          aria-hidden="true"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects"
          aria-label="Search projects"
          className="w-full rounded-md border border-gray-200 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Date Selector */}
      <div className="relative w-full max-w-[180px]">
        <button
          className="flex w-full items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Select date"
          onClick={() =>
            document.getElementById("date-picker").showPicker?.()
          }
        >
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gray-400" aria-hidden="true" />
            {formattedDate}
          </div>
          <ChevronDown className="h-4 w-4 text-gray-400" aria-hidden="true" />
        </button>
        <input
          id="date-picker"
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
          aria-hidden="true"
        />
      </div>
    </div>
          </div>

          {/* right div */}
          <div className='flex items-center gap-2 '>
            {/* icon */}
            <div className='bg-gray-200 items-center rounded-full p-2'>
              <h1>I</h1>
               </div>
               <h1> Apply Filter</h1>

          </div>
        </div>

        {/* kanban */}
        <div className='border p-1 border-gray-200 rounded'>

        </div>
      </div>
    </div>
  )
}

export default Kanban
