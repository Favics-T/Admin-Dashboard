
import React, { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [formData, setFormData] = useState(() => {
    
    
    const stored = localStorage.getItem("userFormData");
    return stored
      ? JSON.parse(stored)
      : { name: "", email: "", password: "", company: "" };
  });

  // Savng to local storage
  useEffect(() => {
    localStorage.setItem("userFormData", JSON.stringify(formData));
  }, [formData]);

  const updateForm = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", password: "", company: "" });
    localStorage.removeItem("userFormData");
  };

  return (
    <UserContext.Provider value={{ formData, updateForm, resetForm }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useForm = () => useContext(UserContext);
