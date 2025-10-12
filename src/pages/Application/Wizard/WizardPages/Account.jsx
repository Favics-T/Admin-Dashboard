import React from 'react'

const title =['Design', 'Develop', 'Code','Design', 'Develop', 'Code','Design', 'Develop', 'Code', ]

const Account = () => {
  return (
    <div className='bg-white rounded-lg py-8'>
     <div className='  items-center justify-center flex flex-col gap-8 px-28 '>
      <div className='borde'>
        <h1 className='text-center'>What are you doing?(checkboxes)</h1>
        <p>Give us more details about you? What do you enjoy doing in your spare time?</p>
      </div>

      <div className='grid gap-4 items-center grid-cols-3'>
        {
          title.map((title, index)=>(
            <div className='bg-white p-4 items-center flex justify-center shadow-lg gap-4' key={index}>
             <h1 className='text-[#3A3541] Lato'>{title} </h1> 
            </div>
          ))
        }
      </div>

      
     </div>
     <div className='justify-end w-full  flex'>
        <button className=''>Next</button>
     </div>
     
    </div>
  )
}

export default Account
