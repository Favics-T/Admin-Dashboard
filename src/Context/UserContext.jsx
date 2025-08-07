import React, { createContext, useContext, useState } from 'react'
export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    company: ''
  });

  const updateForm = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <UserContext.Provider value={{formData,setFormData,updateForm,
                                handleChange
    }}>
        {children}
    </UserContext.Provider>
  )
}
export default UserProvider
export const useForm = ()=> useContext(UserContext)
