import React from 'react'
import ActiveUsers from './ActiveUsers'
import Sales from './Sales'
import TotalEarning from './components/TotalEarning'
import EarningByItem from './components/EarningByItem'
import Impression from './components/Impression'

const Home = () => {
  return (
    <div className="md:w-full w-full px-4 md:px-8">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full">
        {/* Left Column */}
        <div className="flex flex-col gap-6 flex-1">
          <ActiveUsers />
          <Sales />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 flex-1">
          <TotalEarning />
          <EarningByItem />
          <Impression />
        </div>
      </div>
    </div>
  )
}

export default Home
