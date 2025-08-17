import { div } from 'framer-motion/client'
import React from 'react'

const actionList = [
    {title:"Profile Visit", count:250},
    {title:"Website click", count:115},
     {title:"Calls", count:67},
    {title:"Getvdirection", count:164},
     {title:"Emails", count:170},
    // {title:"Profile Visit", count:250},
]

const Card = ({title, count})=>{
    return (
        <div className='flex justify-between Lato text-[14.22px]'>
            <h1>{title}</h1>
            <p className='text-[#6E39CB]'>{count}</p>
        </div>
    )

}

const Action = () => {
  return (
    <div className='md:w-3/10 w-full rounded-xl shadow-xl text-[#3A3541] lato p-6 bg-white '>
        <div className='flex flex-col gap-12'>
            <div className='flex justify-between'>
                <h1 className='text-[20.25px] font-medium Lato'>Actions</h1>
                <p>..</p>
            </div>
            {
                actionList.map(({title,count})=>(
                    <Card title={title} count={count} />
                ))
            }


        </div>
      
    </div>
  )
}

export default Action
