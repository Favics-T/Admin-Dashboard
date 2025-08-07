import React from 'react'

const InputField = ({type='text',name,value,onChange,placeholder,required=false, ...rest}) => {
  return (
    <div>
      <input
     type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
  className="w-full p-2 bg-[#F4F5F9] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}

export default InputField
