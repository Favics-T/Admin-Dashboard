import React from 'react'
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const FAQCard = ({icon:Icon, desc,bgColor})=>
{
return(
  <div className='flex md:gap-8 gap-4 items-center'>
   <div className={`${bgColor} rounded-full p-1 md:p-3`}>
   <Icon className={`text-white md:text-2xl`}/>
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
    <div className='bg-[#6E39CB] py-4 md:h-screen flex flex-col md:justify-center  items-center'>
      <div className='flex flex-col md:justify-center md:items-center md:px-20 px-8 '>
       <div className='flex flex-col gap-8 md:justify-center md:items-cente'>
<h1 className='Lato text-white text-xl'>How it works?</h1>
        <div className='flex flex-col gap-4 justify-center md:w-3/4'>
          {
            faqList.map(({icon, desc,bgColor})=>(
              <FAQCard key={desc} icon={icon} desc={desc} bgColor={bgColor} />
            ))
          }
        </div>
       </div>
        
      </div>
    </div>
  )
}

export default SplashCard
