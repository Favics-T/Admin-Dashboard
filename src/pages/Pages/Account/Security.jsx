import React from 'react'
import Input from '../../../components/Input'
import Button from '../../../components/Button'

const inputdetails =[
    {
        label:"Current password",
        placeholder:"Current password",
           
    },
     {
        label:"New password",
        placeholder:"New password",
           
    },
     {
        label:"Confirm password",
        placeholder:"Confirm password",
           
    },
]

const phones =[
    {

    },
    {
        
    },
    {
        
    },
    {
        
    },
]

const Security = () => {
  return (
    <div className='w-full'>
      <div className='flex md:flex-row gap-8 flex-col'>
        {/* left div */}
        <div className='bg-white flex flex-col gap-6 w-[65%] p-6 rounded-xl shadow-md ' >
            {/* subheader */}
            <div  className='w-1/2 flex flex-col'>
                <h1 className='subHeader'>Password</h1>
                <p className='mini'>The Last Pass pasword generator creates random passwords based on parameter set by you</p>
            </div>

            {/* password */}
            <div className='w-1/2 gap-4 flex flex-col'>
                {
                    inputdetails.map(({label,placeholder})=>(
                        <Input label={label} placeholder={placeholder} />
                    ))
                }
            </div>

            <div className='w-1/2 pl-4 pr-20 py-6 rounded-xl flex flex-col gap-6 bg-[#dbdcde]'>
            <h1 className='darkAsh font-medium '>Rules for password</h1>
            
            <p className='mini'>To create new password you have to meet all of the following requirements</p>

            {/* rules */}
            <div className='flex flex-col gap-2'>
                <li>Minimum 8 character</li>
                <li>At least one special character</li>
                <li>At least one number</li>
                <li>Can't be the same as previous</li>
            </div>
            </div>
        </div>
        
        {/* right div */}
        <div className='bg-white relative p-4 flex flex-col gap-3 rounded-xl shadow-md flex-1'>
               <div className='flex flex-col gap-3 pb-6 border-b brightAsh'>
                 <div>
                    <h1 className='subHeader'>Devices</h1>
                <p className='mini'>The Last Pass password generator creates password based on parameters set by you</p>
               </div>

               {/* button */}
               <Button style='w-3/4' label='Sign out of all devices' />

               </div>

                    <div className='flex justify-center'>
                        <button className='darkAsh text-center absolute w-44  bottom-4 rounded-xl bg-[#dbdcde]'>Need help?</button>
                    </div>
               
              
                
        </div>
      </div>
    </div>
  )
}

export default Security
