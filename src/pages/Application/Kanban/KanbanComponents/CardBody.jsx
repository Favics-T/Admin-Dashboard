import { div } from 'framer-motion/client'
import React from 'react'

const CardBody = ({children,type}) => {
    return(
        <div className='border shadow-md border-gray-200 rounded h-full'>
            <div className={`p-2 bg-[#e1dde7] border-t-2 ${type === 'To Do Task' ? 'border-gray-400':"border-[#6E39CB]"}  flex justify-between`}>
                <h1>{type}</h1>
                <h1>-</h1>
            </div>
            
            <div className='px-6 py-2'>
 {
            type === 'To Do Task'
            ?
            (<div className='border-2 p-2 rounded flex items-center text-[#89868D] justify-center border-dotted '>
              <h1>+</h1>  </div>):
                <div></div>
           } 

            <div>{children}</div>
            </div>

          
        </div>
    )
}

export default CardBody
