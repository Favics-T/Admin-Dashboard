import React, { useContext } from "react";
import { WizardContext } from "../../../Context/WizardContext";
import About from "./WizardPages/About";
import Account from "./WizardPages/Account";
import Address from "./WizardPages/Address";
import WizardHeader from "./WizardComponets/WizardHeader";

export default function Wizard() {
  const { step } = useContext(WizardContext);

  return (
    <div className="flex flex-col items-center w-full h-full">
      <WizardHeader currentStep={step} />

      <div className="mt-8 w-full flex justify-center">
        {step === 1 && <About />}
        {step === 2 && <Account />}
        {step === 3 && <Address />}
      </div>
    </div>
  );
}
