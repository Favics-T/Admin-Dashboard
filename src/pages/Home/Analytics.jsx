import React from 'react'
import Category from './components/Category'
import AnalyticsSales from './components/AnalyticsSales'
import AnalyticsWatchList from './components/AnalyticsWatchList'
import Device from './components/Device'
import Countries from './components/Countries'

const Analytics = () => {
  return (
    <div>
      <div className='flex  flex-col gap-8'>
        <Category />
      
        <div className='flex md:flex-row md:w-full w-[290px] flex-col gap-8'>
            {/* sales and watchlist */}
                <div className="flex flex-col gap-8">
                    <AnalyticsSales />
                    <AnalyticsWatchList />
                </div>

                {/* countries and device category */}
                <div className='flex flex-col gap-8'>
                    <Device />
                    <Countries />
                </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
