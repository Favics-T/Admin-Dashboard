import React from 'react'
import CardC from '../../../components/CardC'
import GraphText from '../../../components/GraphText'

const Report = () => {
  return (
    <div className='w-full flex flex-col gap-8 '>
      <div className='flex flex-col gap-8'>
        {/* reports */}
        {/* <Report /> */}
        {/* stat */}
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
