import React, { createContext, useState } from "react";

export const WizardContext = createContext();

export default function WizardProvider({ children }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateofBirth:"",
    phone: "",
    city: "",
    postal: "",
    hobbies: [],
    streetName: "",
    streetNo: "",
    country: "",
  });

  const [avatar, setAvatar] = useState(null);
  const [error, setError] = useState("");

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleCheckbox = (hobby) => {
    setForm((prev) => {
      const alreadySelected = prev.hobbies.includes(hobby);
      return {
        ...prev,
        hobbies: alreadySelected
          ? prev.hobbies.filter((item) => item !== hobby)
          : [...prev.hobbies, hobby],
      };
    });
  };

  const handleAvatarChange = (dataUrl) => setAvatar(dataUrl);

  
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.streetName.trim() || !form.city.trim()) {
      setError("Please fill out your address details.");
      return;
    }

    setError("");
    console.log("Final Form Data:", { ...form, avatar });
    alert("Form submitted successfully!");
  };

  return (
    <WizardContext.Provider
      value={{
        step,
        setStep,
        form,
        avatar,
        error,
        setError,
        handleChange,
        handleAvatarChange,
        handleCheckbox,
        nextStep,
        prevStep,
        handleSubmit,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
}
