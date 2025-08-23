import React from 'react'

const Button = ({label,style,onClick}) => {
  return (
    <div>
      <button
      onClick={onClick}
      className={`${style} w-full rounded-md lato bg-[#6E39CB] text-white text-[16px] font-medium p-2 cursor-pointer `}
      >{label}</button>
    </div>
  )
}

export default Button
