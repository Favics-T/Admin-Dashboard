import React, { useContext } from "react";
import AboutInput from "../ui/AboutInput";
import AvatarUploader from "../ui/AvatarUpload";
import { WizardContext } from "../../../../Context/WizardContext";

export default function About() {
  const {
    form,
    avatar,
    handleChange,
    handleAvatarChange,
    nextStep,
    error,
    setError,
  } = useContext(WizardContext);

  const handleNext = (e) => {
    e.preventDefault();
    if (!form.firstName.trim() || !form.email.trim()) {
      setError("Please fill all required fields.");
      return;
    }
    setError("");
    nextStep();
  };

  return (
    <form
      onSubmit={handleNext}
      className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm space-y-6"
    >
      <header>
        <h1 className="text-2xl font-semibold">Let’s start with the basics</h1>
        <p className="text-gray-500 text-sm">
          Please fill your personal information below.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <AvatarUploader
            name={`${form.firstName || "Profile"}`}
            subtitle="Profile picture"
            avatar={avatar}
            onChange={handleAvatarChange}
          />
        </div>

        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <AboutInput
            id="firstName"
            label="First name"
            required
            value={form.firstName}
            onChange={handleChange}
            placeholder="John"
          />
          <AboutInput
            id="lastName"
            label="Last name"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Doe"
          />
          <AboutInput
            id="email"
            type="email"
            label="Email Address"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
          />
          <AboutInput
            id="dob"
            label="Date of Birth"
            
            type="text"
            value={form.dateofBirth}
            onChange={handleChange}
            placeholder="01-01-2000"
          />
        </div>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-[#6E39CB] text-white px-5 py-2 rounded-lg font-medium hover:shadow-md"
        >
          Next
        </button>
      </div>
    </form>
  );
}
