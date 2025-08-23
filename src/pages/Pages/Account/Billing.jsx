import React from 'react'
import AvatarStack from '../../../components/AvatarStack'
import BasicPlan from './component/BasicPlan'
import PaymentMethod from './component/PaymentMethod'
import BillingHistory from './component/BillingHistory'



const Billing = () => {
  return (
    <div className='w-full '>
      <div className='flex flex-col gap-8'>
        {/* subheader */}
        <div className='flex flex-col '>
            <h1 className='subHeader '>Plans and billing</h1>
            <p className='mini'>Manage your plan and billing details</p>
        </div>

        {/* section2 */}
        <div className='grid md:grid-cols-2  gap-6'>
           <BasicPlan />
           <PaymentMethod />
        </div>

        {/* section3- billing history */}
        <div>
            <BillingHistory />
        </div>
      </div>
    </div>
  )
}

export default Billing
