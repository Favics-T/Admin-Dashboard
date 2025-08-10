import React from 'react'
import SplashCard from './components/SplashCard'

const AuthLayout = ({ children }) => {
  return (
    <div className='  h-screen md:justify-start justify-center '>
      <div className='flex md:flex-row flex-col h-full'>
       <div className='md:w-1/2'>
<SplashCard />
       </div>
       <div className='md:w-1/2'>
        {children}
       </div>
        
        
      </div>
     
      
    </div>
  )
}

export default AuthLayout
