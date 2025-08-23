import React, { useState } from "react";

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="grid md:grid-cols-4 gap-4 justify-between items-center bg-white shadow-sm rounded-xl p-4 mb-8">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        return (
          <div key={step} className="flex items-center w-full">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full 
                ${isActive ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-600"}`}
            >
              {index + 1}
            </div>
            <span
              className={`ml-2 text-sm font-medium ${
                isActive ? "text-purple-600" : "text-gray-500"
              }`}
            >
              {step}
            </span>
            {index < steps.length - 1 && (
              <div className="flex-1 h-[2px] bg-gray-200 mx-2" />
            )}
          </div>
        );
      })}
    </div>
  );
};

// Input Component
const InputField = ({ label, placeholder, type = "text" }) => (
  <div className="flex flex-col space-y-1">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
    />
  </div>
);

const NewUser = () => {
  const steps = ["User Info", "Address", "Socials", "Profile"];
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="min-h-screen w-full flex flex-col items-center py-10 px-4">
      {/* Stepper */}
      <div className="w-full max-w-3xl">
        <Stepper steps={steps} currentStep={currentStep} />

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-10">
          <h2 className="text-lg font-semibold text-gray-800">About me</h2>
          <p className="text-sm text-gray-500 mb-6">
            Mandatory information
          </p>

          {/* Form Grid */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="First name" placeholder="eg. Malik" />
            <InputField label="Last name" placeholder="eg. Ali" />
            <InputField label="Company" placeholder="eg. TeamUXD" />
            <InputField label="Email Address" placeholder="eg. team@gmail.com" type="email" />
            <InputField label="Password" placeholder="••••••••" type="password" />
            <InputField label="Repeat password" placeholder="••••••••" type="password" />

            {/* Button Row */}
            <div className="md:col-span-2 flex justify-end">
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700 transition"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
