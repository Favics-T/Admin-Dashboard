import React from 'react'

const Card = ({children,style}) => {
  return (
         <div className={`shadow-xl rounded-2xl bg-white ${style}`}>
                            {children}
              </div>
    
  )
}

export default Card
