import React from 'react';
import Button from '../../../components/Button';

const TotalEarning = () => {
  return (
    <div className='bg-white h-[334px] lato px-8 flex flex-col gap-10 justify-center items-center shadow-lg rounded-lg w-full md:w-[260px]'>
      <div className='flex flex-col gap-8 justify-center items-center text-center'>
        <h1 className="font-medium lato text-[#3a3541] text-[20.25px]">Your Earnings this month</h1>
        <div className='flex flex-col gap-8'>
          <h1 className=" font-bold Lato text-[#6E39CB] text-6xl">735.24$</h1>
          <p className="text-lg font-medium  text-center text-gray-500">Update your <br /> payout method in Setting</p>
        </div>
      </div>
      <Button label='Withdraw all earnings' style={`shadow text-[#6E39CB] text-[16px] `} />
    </div>
  );
};

export default TotalEarning;
