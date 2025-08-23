import React from 'react'
import CardC from '../../../../components/CardC'

const PaymentMethod = () => {
  return (    
        <CardC customClassName='md:h-[200px]  p-4 relative'>
        <div className=' flex flex-col gap-8'>
            {/* sect1 */}
            <div>
                <h1 className='subHeader'>Payment method</h1>
                <p className='mini'>Change how you pay for your plan.</p>
            </div>

            {/* sect2 */}
            <div className='flex md:flex-row flex-col md:gap-0 gap-4 p-4 rounded-xl shadow-md md:justify-between'>
                {/* left div */}
                <div className='flex gap-4'>
                    <h1 className='subHeader'>Visa</h1> 
                    <div>
                        <h1 className='darkAsh'>Visa ending in 6798</h1>
                        <p className='mini'>Expiry 01/23</p>
                    </div>
                </div>

                <button className='text-white bg-[#6E39CB] px-12 rounded-lg py-2 text-[12px]'>Edit</button>
            </div>
        </div>
        </CardC>
         
  )
}

export default PaymentMethod
