import React, { createContext } from 'react'
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
  return (
    <UserContext.Provider value={{}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider
