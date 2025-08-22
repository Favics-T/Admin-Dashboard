import React from 'react'
import { useForm } from '../../Context/UserContext'

const InputField = ({type='text',name,value,onChange,placeholder,required=true, ...rest}) => {
  const {formData, updateForm} = useForm();
    return (
    <div>
      <input
     type={type}
        name={name}
        id={name}
        value={formData[name] || ''}
        onChange={(e)=> updateForm(name, e.target.value)}
        placeholder={placeholder}
        required={required}
        {...rest}
  className="w-full p-2 bg-[#F4F5F9] rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  )
}

export default InputField
