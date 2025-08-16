import React from 'react'
import Section1 from './ProfileComponent/Section1'

const ProfileOverview = () => {
  return (
    <div>
      <div className='flex gap-8 pb-12  w-full'>
        {/* left div */}
        <div className=' p-2 md:w-[800px] w-full flex flex-col gap-8 '>
          {/* Stat card */}
          <div>
          <Section1 />
          </div>

          {/* Followers and Actions */}
          <div>

          </div>
          {/* Interaction and Best Time */}
          <div>

          </div>
          {/* Gender and Age Range */}
          <div>

          </div>

        </div>
        {/* right div - Profile  */}
        <div className=' md:block h-screen bg-white shadow-xl rounded-lg hidden p-1 w-60'>
      profile section
        </div>


      </div>
       </div>
  )
}

export default ProfileOverview
