import React from 'react'

const Card = ({children}) => {
  return (
    <div>
      <div className='  md:w-60 w-[290px]  shadow-lg rounded-lg bg-white'>
                <div className='px-4'>
            {children}
        </div>
      </div>
    </div>
  )
}

export default Card
