import React from 'react'

const ProductInput = ({
    id,
    label,
    required=false,
    autoComplete,
    onChange,
    type="text",
    value,
    placeholder="",
    ...rest
}) => {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={id} className='text-sm font-medium'>
        {label}{required && <span className='text-red-600'>*</span>}
      </label>

      <input 
           id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        {...rest}
        className='p-1 text- bg- shadowblock w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6E39CB] focus:border-transparent transition-shadow bg-white'
      />
    </div>
  )
}

export default ProductInput
