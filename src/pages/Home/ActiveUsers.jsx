import React from 'react';
import { SlGraph } from "react-icons/sl";
import { FaFileAlt } from "react-icons/fa";
import TransactionGraph from './Chart/TransactionGraph';
import UserCard from './components/UserCard';
import DashboardChart from './Chart/DashboardChart';

const ActiveUsers = () => {
  return (
    <div className="bg-white w-full max-w-[900px] mx-auto p-4 sm:p-6 rounded-lg shadow">
      <div className="flex flex-col gap-4">

        {/* Subtitle */}
        <h1 className="text-[#3A3541] font-lato text-lg sm:text-xl">
          Active users right now
        </h1>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row gap-4">
          
          {/* Left Stats */}
          <div className="md:basis-1/5 flex flex-col gap-6 flex-shrink-0">
            
            {/* Page Views */}
            <div className="flex flex-col gap-2">
              <h1 className="text-[#6E39CB] text-4xl sm:text-5xl md:text-6xl font-bold font-lato">
                300
              </h1>
              <div className="flex items-center gap-2">
                <FaFileAlt className="text-[#6E39CB] text-base sm:text-lg" />
                <p className="text-[#3A3541] text-xs sm:text-sm font-lato">
                  Page views per minute
                </p>
              </div>
            </div>
            
            {/* Upgrade Notice */}
            <div className="border-t border-[#DBDCDE] flex flex-col gap-2 items-center pt-2 text-center">
              <SlGraph 
                className="text-[#6E39CB] text-3xl sm:text-4xl mt-1"
                style={{ transform: 'scaleX(2.5)' }} 
              />
              <p className="text-xs sm:text-sm text-[#3A3541] font-lato">
                Upgrade your payout method in settings
              </p>
            </div>
          </div>
          
          {/* Right Chart */}
          <div className="flex-1 min-w-0">
            <DashboardChart />
          </div>
        </div>

        {/* Section 3 */}
        <UserCard />
      </div>
    </div>
  );
};

export default ActiveUsers;
