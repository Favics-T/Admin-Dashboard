import { div } from 'framer-motion/client'
import React from 'react'

const HeaderComponent = ({num, title})=>
{
    return(
       <div className='flex justify-center items-center '>
      <div className='flex '>

            <div className='flex gap-3 items-center'>
                <h1 className='text-white bg-[#6E39CB purpleBackground px-4 py-2 text-lg  rounded-full'>
                    {num}</h1>
                <h1 className='text-md font-medium purple'>
                   {title}
                    </h1>

                {/* Line Connecctor */}
                    <div className='purpleBackground h-1 w-24 '>

                    </div>
            </div>
      </div>
    </div>
    )
}
const header = [
    {num:1, title:"Product Info"},
    {num:2, title:"Media"},
    {num:3, title:"Social"},
    {num:4, title:"Pricing"}
]
const ProductHeader = () => {
  return (
    <div className='flex gap-4 items-center justify-center w-full'>
        {
            header.map(({num,title})=>(
                <HeaderComponent num={num} title={title} />
            ))
        }
    </div>

  )
}

export default ProductHeader
