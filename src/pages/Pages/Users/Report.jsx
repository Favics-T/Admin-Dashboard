import React from 'react'
import CardC from '../../../components/CardC'
import GraphText from '../../../components/GraphText'

const report =[
  {price:"$8,098.32", title:"Payment"},
    {price:"$901,256.01", title:"Loan income"},
      {price:"$987,256.98", title:"Gross amount"},
        {price:"$564,164.57", title:"Jobs create"},
]

const ReportPrice=({price, title})=>{
  return(
    <div className='flex flex-col md:shadow-none w-full shadow-md md:p-1 p-8 md:border-r text-gray-300'>
      <h1 className='text-[#3A3541] font-bold text-[28.83px]'>{price}</h1>
      <p className=' text-center text-lg font md:text-[12px]'>{title}</p>

    </div>
  )
}
const Report = () => {
  return (
    <div className='w-full flex flex-col gap-8 L
    lato '>
      <div className='flex flex-col gap-8'>
        <div className='grid md:grid-cols-4 rounded-lg shadow gap-8  bg-white md:items-start items-center md:justify-start justify-center p-10 md:p-[76px]'>
          {
            report.map(({price,title})=>(
              <ReportPrice price={price} title={title} />
            ))
          }
        </div>
        <div >
             <CardC customClassName='w-full h-44'>
                <GraphText />
            </CardC>
        </div>

        {/* payment an loan graph */}
        <div className='flex w-full h-44 gap-8'>
            <CardC customClassName='w-1/2 '>
                <GraphText />
            </CardC>

            <CardC customClassName='w-1/2'>
                <GraphText />
            </CardC>
        </div>

      </div>
    </div>
  )
}

export default Report
