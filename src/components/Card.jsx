import React from 'react'

const Card = ({children, title}) => {
  return (
    <div>
      <div className='flex flex-col gap-8'>
        <h1 className='lato text-[#3A3541]'>{title}</h1>

        <div>
            {children}
        </div>
      </div>
    </div>
  )
}

export default Card
