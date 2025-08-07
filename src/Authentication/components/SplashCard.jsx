import React from 'react'
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const FAQCard = ({icon:Icon, desc,bgColor})=>
{
return(
  <div className='flex gap-8 items-center'>
   <div className={`${bgColor} rounded-full p-3`}>
   <Icon className={`text-white text-2xl`}/>
   </div>
   
    <p1 className='text-white lato text-md w-3/4 text-[14px]'>{desc}</p1>
    
  </div>
)
}

const faqList = [
  {icon:CiUser, desc:"Join Us", bgColor:"bg-[#0039BA]"},
  {icon:CiSearch, desc:"Bring your own talent pool or let us match your posts with the best ones" , bgColor:"bg-[#23B1D3]"},
  {icon:FaPhoneAlt, desc:"Get in touch with the talemts with just a few clicks wihtout cold calls or emails", bgColor:"bg-[#00D156]"},
]



const SplashCard = () => {
  return (
    <div className='bg-[#6E39CB] h-screen flex flex-col justify-center  items-center'>
      <div className='flex flex-col justify-center items-center px-20 '>
       <div className='flex flex-col gap-8 justify-center items-cente'>
<h1 className='Lato text-white text-xl'>How it works?</h1>
        <div className='flex flex-col gap-4 justify-center w-3/4'>
          {
            faqList.map(({icon, desc,bgColor})=>(
              <FAQCard icon={icon} desc={desc} bgColor={bgColor} />
            ))
          }
        </div>
       </div>
        
      </div>
    </div>
  )
}

export default SplashCard
