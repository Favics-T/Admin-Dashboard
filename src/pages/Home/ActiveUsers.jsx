import React from 'react';
import { SlGraph } from "react-icons/sl";
import { FaFileAlt } from "react-icons/fa";
import TransactionGraph from './Chart/TransactionGraph';
import UserCard from './components/UserCard';

const ActiveUsers = () => {
  return (
    <div className="bg-white w-[270px] md:w-[762px] p-4 rounded-lg shadow">
      <div className="flex  flex-col gap-4">
        
        {/* Subtitle */}
        <h1 className="text-[#3A3541] font-lato text-xl">
          Active users right now
        </h1>

        {/* Section 2 */}
        <div className="flex md:flex-row flex-col gap-4">
          
          {/* Left Stats */}
          <div className="basis-1/5 flex flex-col gap-6">
            
            {/* Page Views */}
            <div className="flex flex-col gap-2">
              <h1 className="text-[#6E39CB] text-6xl font-bold font-lato">
                300
              </h1>
              <div className="flex items-center gap-2">
                <FaFileAlt className="text-[#6E39CB] text-lg" />
                <p className="text-[#3A3541] text-sm font-lato">
                  Page views per minute
                </p>
              </div>
            </div>
            
            {/* Upgrade Notice */}
            <div className="border-t border-[#DBDCDE] flex flex-col gap-2 items-center pt-2 text-center">
              <SlGraph 
                className="text-[#6E39CB] text-4xl mt-1"
                style={{ transform: 'scaleX(2.5)' }} 
              />
              <p className="text-sm text-[#3A3541] font-lato">
                Upgrade your payout method in settings
              </p>
            </div>

          </div>
          
          {/* Right Chart */}
          <div className="flex-1">
            <TransactionGraph />
          </div>

        </div>

        {/* Section 3 */}
        <UserCard />

      </div>
    </div>
  );
};

export default ActiveUsers;
