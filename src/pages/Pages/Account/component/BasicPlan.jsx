import React from 'react'
import CardC from '../../../../components/CardC'
import AvatarStack from '../../../../components/AvatarStack'

const BasicPlan = () => {
  return (
    
      <CardC customClassName='h-[200px] relative ' >
        <div className='flex p-4 flex-col gap-4 '>
            {/* basicplan */}
            <div className='flex justify-between'>
                 <div>
                <h1 className='subHeader'>Basic plan</h1>
                <p className='mini'>Our most popular plan for small teams</p>
            </div>

            <h1 className='subHeader'>$20 <span className='mini'>per month</span></h1>

            </div>
           

           
            {/* avatar */}
            <AvatarStack />

            {/*upgrade  */}
            <div className='bottom-4 text-[14px] absolute right-4 purple'>
                <h1>Upgrade Plan</h1>
            </div>
        </div>
      </CardC>
    
  )
}

export default BasicPlan
