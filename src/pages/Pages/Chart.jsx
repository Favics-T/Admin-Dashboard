import React from 'react'
import CardC from '../../components/CardC'
import GraphText from '../../components/GraphText'

const Chart = () => {
  return (
    <div>
       <div className='flex md:flex-row flex-col gap-4'>
          <CardC customClassName='h-60 md:w-1/2'><GraphText />  </CardC>
            <CardC customClassName='h-60 md:w-1/2'><GraphText />  </CardC>
          </div>
    </div>
  )
}

export default Chart
