import React, { useState } from "react";
import WizardHeader from "./WizardComponets/WizardHeader";
// import AboutF from "./Steps/AboutForm";
import About from './WizardPages/About'
import Account from './WizardPages/Account'
import Address from './WizardPages/Address'

export default function Wizard() {
  const [step, setStep] = useState(1);
  const [collectedData, setCollectedData] = useState({});

  function handleNext(data) {
    setCollectedData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  }

  return (
    <div className="flex flex-col items-center w-full h-full">
      <WizardHeader currentStep={step} />

      <div className="mt-8 w-full flex justify-center">
        {step === 1 && <About onNext={handleNext} />}
        {step === 2 && <Account onNext={handleNext} />}
        {step === 3 && <Address onNext={handleNext} />}
      </div>
    </div>
  );
}
