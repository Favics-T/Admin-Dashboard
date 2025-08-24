import React from 'react'
import CardC from '../../../components/CardC'
import GraphText from '../../../components/GraphText'

const report = [
  { price: "$8,098.32", title: "Payment" },
  { price: "$901,256.01", title: "Loan income" },
  { price: "$987,256.98", title: "Gross amount" },
  { price: "$564,164.57", title: "Jobs create" },
]

const ReportPrice = ({ price, title }) => {
  return (
    <div className='flex flex-col w-full shadow-md md:shadow-none md:p-1 p-6 border-gray-200 md:border-r text-gray-700'>
      <h1 className='text-[#3A3541] font-bold text-2xl md:text-xl'>{price}</h1>
      <p className='text-center text-base md:text-sm'>{title}</p>
    </div>
  )
}

const Report = () => {
  return (
    <div className='w-full flex flex-col gap-8 lato'>
      <div className='flex flex-col gap-8'>
        {/* Stats section */}
        <div className='grid grid-cols-1 md:grid-cols-4 rounded-lg shadow bg-white p-6 md:p-12 gap-6'>
          {report.map(({ price, title }, index) => (
            <ReportPrice key={index} price={price} title={title} />
          ))}
        </div>

        {/* Overview graph */}
        <div>
          <CardC customClassName='w-full h-44'>
            <GraphText />
          </CardC>
        </div>

        {/* Payment & Loan graph */}
        <div className='flex flex-col md:flex-row w-full gap-6'>
          <CardC customClassName='w-full md:w-1/2 h-44'>
            <GraphText />
          </CardC>
          <CardC customClassName='w-full md:w-1/2 h-44'>
            <GraphText />
          </CardC>
        </div>
      </div>
    </div>
  )
}

export default Report
