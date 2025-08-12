import React from 'react'
import ActiveUsers from './ActiveUsers'
import Sales from './Sales'
import TotalEarning from './components/TotalEarning'
import EarningByItem from './components/EarningByItem'
import Impression from './components/Impression'

const Home = () => {
  return (
    <div className='flex md:flex-row flex-col gap-2  md:gap-10  '>
      {/* sales and active users */}
      <div className='flex flex-col gap-8'>
 <ActiveUsers />
      <Sales />
      </div>

      {/* right div */}
      <div className='flex flex-col gap-4'>
        <TotalEarning />
        <EarningByItem />
        <Impression />
      </div>
     
    </div>
  )
}

export default Home
