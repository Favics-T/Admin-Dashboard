import React, { useState } from 'react'
import InputField from './components/InputField'
import { useForm } from '../Context/UserContext'
import Button from '../components/Button';

const SignUp = () => {
 const {formData,updateForm} = useForm();
  const inputfield =[
    {placeholder:'Name',name:'name', type:'text' },
    {placeholder:'E-mail Address', name:'email',type:"email"},
    {placeholder:"Password",name:'password',type:"password"},
    {placeholder:"Company",name:'company',type:"text"}

  ]

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(formData)

  }

  return (
    <div className='flex px-4 md:h-screen justify-center items-center'>
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

<div className='flex flex-col gap-3'>
  <Button label='Sign up' style='bg-[#6E39CB] text-white '/>
  <Button label='Sign up with google' style='bg-[#DECCFE] text-[#3A3541]' />
</div>

<p className='text-center hover:underline cursor-pointer'>I have an account. <span>Sign in</span></p>
      </div>
      
    </div>
  )
}

export default SignUp
