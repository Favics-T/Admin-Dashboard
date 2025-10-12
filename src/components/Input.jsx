import React from 'react'

const Input = ({name,className,
  id,
  label,
  type = "text",
  placeholder = "",
  required = false,
  value,
  onChange,
  autoComplete,
  ...rest
}) => {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={name}>{label}{required && <span className='ml-1 text-red-500'>*</span> }</label>
      <input 
      className={`bg-[#DBDCDE] rounded-lg p-2 ${className}`}
      type="text" //{type}
      placeholder={placeholder}
      onChange={onChange}
      autoComplete={autoComplete}
      required={required}
      id={id}
      {...rest}
      />
    </div>
  )
}

export default Input





