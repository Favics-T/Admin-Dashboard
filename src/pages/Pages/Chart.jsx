import React from 'react'
import CardC from '../../components/CardC'
import GraphText from '../../components/GraphText'

const Chart = () => {
  return (
    <div className='w-full'>
       <div className=' grid md:grid-cols-2 w-full gap-4'>
          <CardC customClassName='h-60 '><GraphText />  </CardC>
            <CardC customClassName='h-60 '><GraphText />  </CardC>
            <CardC customClassName='h-60 '><GraphText />  </CardC>
            <CardC customClassName='h-60 '><GraphText />  </CardC>
          </div>
    </div>
  )
}

export default Chart
