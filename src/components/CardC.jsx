import React from 'react'

const CardC = ({children, customClassName}) => {
  return (
    <div className={` bg-white rounded-xl ${customClassName} `}>
      {children}
    </div>
  )
}

export default CardC
