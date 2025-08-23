import React from 'react'

const Input = ({label,placeholder,name,className}) => {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={name}>{label}</label>
      <input 
      className={`bg-[#DBDCDE] rounded-lg p-2 ${className}`}
      type="text" placeholder={placeholder} />
    </div>
  )
}

export default Input
