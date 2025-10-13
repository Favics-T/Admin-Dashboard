import React, { createContext, useState } from 'react'

export const EcommerceContext = createContext();

const EcommerceContext = ({children}) => {

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
    <EcommerceContext.Provider value={{form, setForm}}>
      {children}
    </EcommerceContext.Provider>
  )
}

export default EcommerceContext
