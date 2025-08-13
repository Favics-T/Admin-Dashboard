import React from 'react'
const cat =[
    {title:"Available to withdraw", perc:"10.0%", price:"$1,567.99", day:"Wed,Jul 20"},
    {title:"Total Revenue", perc:"3.0%", price:"$2,567.99", day:"143 orders"},
    {title:"Today Sessions", perc:"3.2%", price:"156k", day:"32k Visitors"},
    {title:"Subscribers", perc:"8.3%", price:"$3,422", day:"$32.48 Average Order"},
]

const CatCard = ({title, perc,price,order})=>{
    return(
    <div className='md:px-8 flex flex-col md:gap-6 gap-2 px-4 md:w-full w-[250px]
     shadow-emerald-50 md:shadow-white shadow-md md:border-r border-dashed border-[#898] '>
        <div className='flex gap-4  items-center lato '>
           <h1 className='text-[#3A3541]  md:font-medium text-sm md:text-[16px]'>{title} </h1> 
           <p className='text-[#6E39CB] text-[12.64px]'>{perc}</p>
        </div>
        <h1 className='text-[#6E39CB] font-bold text-[20px] md:text-[28.93px]'>{price}</h1>
        <p className='text-[#89868D] text-[14.22px]'>{order}</p>
    </div>

    )
}

const Category = () => {
  return (
    <div className='bg-white rounded-lg shadow-xl  flex md:flex-row flex-col items-center justify-center gap-4 py-12'>
      {
        cat.map(({title,perc, price,day})=>(
            <CatCard title = {title} perc={perc} price={price} order={day} />
        ))
      }
    </div>
  )
}

export default Category
