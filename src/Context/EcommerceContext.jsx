import React, { createContext, useState } from 'react'

export const EcommerceContext = createContext();

const EcommerceProvider = ({children}) => {

      const [step, setStep] = useState(1);
      const [form, setForm]= useState({
        name:"",
        weight:"",
        sizes:"",
        category:"",
        description:"",
        facebookAccount:"",
        instagramAccount:"",
        linkedlnAccount:"",
        dribbleAccount:"",
        behanceAccount:"",
        UIBAccount:"",
        price:"",
        currency:"",
        sku:"",
        tags:""
      })


  return (
    <EcommerceContext.Provider value={{ form, setForm,
                                      step,setStep}}>
      {children}
    </EcommerceContext.Provider>
  )
}

export default EcommerceProvider
