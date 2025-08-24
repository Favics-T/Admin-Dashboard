import React from 'react'
import TotalEarning from './components/TotalEarning'
import EarningByItem from './components/EarningByItem'
import Impression from './components/Impression'
import ActiveUsers from './ActiveUsers'

const Dashboard = () => {
  return (
    <div className='w-full    '>
      <div className='flex w-full  gap-8 md:flex-row flex-col'>
        {/* left div */}
        <section className='md:w-[65%] flex flex-col gap-6'>
          {/* first div */}
          <div className='bg-white  w-full shadow-md'>
            <ActiveUsers />
          </div>

          {/* second div */}
          <div className=' items-center h-52 rounded-2xl flex justify-center bg-white shadow-xl w-full'>
            <h1 className='purple Lato text-xl'>Chart Coming</h1>
          </div>

        </section>

        {/* right div */}
        <section className='flex-1 flex flex-col gap-6'>
           <TotalEarning /> 
          <EarningByItem />
          <Impression />
           
        </section>
      </div>
    </div>
  )
}

export default Dashboard
