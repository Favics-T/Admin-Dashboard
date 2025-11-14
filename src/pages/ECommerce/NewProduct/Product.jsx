import React, { useContext } from 'react'
import ProductHeader from '../components/ProductHeader'
import { EcommerceContext } from '../../../Context/EcommerceContext'

const Product = () => {
  const {step} = useContext(EcommerceContext);
  return (
    <div className='flex justify-center items-center w-full '>

        <div className='flex flex-col items-center justify-center'>
            <ProductHeader />
        </div>
      
    </div>
  )
}

export default Product
