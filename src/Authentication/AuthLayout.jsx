import React from 'react'
import SplashCard from './components/SplashCard'

const AuthLayout = ({ children }) => {
  return (
    <div className='  h-screen '>
      <div className='flex h-full'>
       <div className='w-1/2'>
<SplashCard />
       </div>
       <div className='w-1/2'>
        {children}
       </div>
        
        
      </div>
     
      
    </div>
  )
}

export default AuthLayout
