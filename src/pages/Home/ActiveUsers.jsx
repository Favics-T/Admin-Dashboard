import React from 'react';
import { SlGraph } from "react-icons/sl";
import { FaFileAlt } from "react-icons/fa";
import TransactionGraph from './Chart/TransactionGraph';
import UserCard from './components/UserCard';
import DashboardChart from './Chart/DashboardChart';
import CardC from '../../components/CardC';
import GraphText from '../../components/GraphText';

const ActiveUsers = () => {
  return (
    <div className="bg-white w-full max-w-[1200px] mx-auto p-4 sm:p-6 rounded-lg shadow">
      <div className="flex flex-col gap-6">

        {/* Subtitle */}
        <h1 className="text-[#3A3541] font-lato text-lg sm:text-xl text-center md:text-left">
          Active users right now
        </h1>

        {/* Main stats and chart */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">

          {/* Left Stats */}
          <div className="flex flex-col gap-6 md:basis-1/4 flex-shrink-0 items-center md:items-start">
            
            {/* Page Views */}
            <div className="flex flex-col gap-2 items-center md:items-start">
              <h1 className="text-[#6E39CB] text-4xl sm:text-5xl md:text-6xl font-bold font-lato">
                300
              </h1>
              <div className="flex items-center gap-2">
                <FaFileAlt className="text-[#6E39CB] text-xl sm:text-2xl" />
                <p className="text-[#3A3541] text-xs sm:text-sm font-lato text-center md:text-left">
                  Page views per minute
                </p>
              </div>
            </div>
            
            {/* Upgrade Notice */}
            <div className="border-t border-[#DBDCDE] flex flex-col gap-2 items-center md:items-start pt-2 text-center md:text-left">
              <SlGraph 
                className="text-[#6E39CB] text-3xl sm:text-4xl mt-1"
                style={{ transform: 'scaleX(2)' }}
              />
              <p className="text-xs sm:text-sm text-[#3A3541] font-lato">
                Upgrade your payout method in settings
              </p>
            </div>
          </div>
          
          {/* Right Chart */}
          <div className="flex-1 border rounded-2xl shadow-xl text-gray-200 w-full h-64 sm:h-80 py-12 md:h-96">
           <div className='flex  items-center justify-center h-full '>
          <CardC customClassName=''><GraphText />  </CardC>
            {/* <CardC customClassName='h-60 md:w-1/2'><GraphText />  </CardC> */}
          </div>
          </div>
        </div>

        {/* User Cards / Section 3 */}
        <UserCard />
      </div>
    </div>
  );
};

export default ActiveUsers;
