import React from 'react'
import Section1 from './ProfileComponent/Section1'
import Followers from './ProfileComponent/Followers'
import Action from './ProfileComponent/Action'
import CardC from '../../../components/CardC'
import GraphText from '../../../components/GraphText.jsx'
import MyProfile from './ProfileComponent/MyProfile.jsx'



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
          <div className='flex gap-4 md:flex-row flex-col'>
            <Followers />
            <Action />

          </div>
          {/* Interaction and Best Time */}
          <div className='flex md:flex-row flex-col gap-4'>
          <CardC customClassName='h-60 md:w-1/2'><GraphText />  </CardC>
            <CardC customClassName='h-60 md:w-1/2'><GraphText />  </CardC>
          </div>
          {/* Gender and Age Range */}
          <div>
            <div className='flex md:flex-row flex-col gap-4'>
          <CardC customClassName='h-60 w-full md:w-3/10'><GraphText />  </CardC>
            <CardC customClassName='h-60 w-full md:w-7/10'><GraphText />  </CardC>
          </div>
          </div>

        </div>
        {/* right div - Profile  */}
        <div className=' lg:block   bg-white shadow-xl rounded-lg hidden p-1 w-60'>
            <MyProfile />
        </div>


      </div>
       </div>
  )
}

export default ProfileOverview
