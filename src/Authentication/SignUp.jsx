import React, { useState } from 'react'
import InputField from './components/InputField'

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const handleChange =(e)=>{
        e.target.value()
  }
  const inputfield =[
    {placeholder:'Name', },
    {placeholder:'E-mail Address'},
    {placeholder:"Password"},
    {placeholder:"Company"}

  ]
  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='flex flex-col gap-8 w-96'>
<h1 className='Lato text-lg '>Sign Up</h1>
<form action=""
className='flex flex-col gap-4 w-full'>
  {
    inputfield.map((field, index)=>(
      <InputField key={index} {...field}/>
    ))
  }
 
</form>
      </div>
      
    </div>
  )
}

export default SignUp
