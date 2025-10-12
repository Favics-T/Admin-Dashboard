import React from "react";
import Step from "./Step";


export default function WizardHeader({ currentStep }) {
  const steps = [
    { id: 1, title: "About" },
    { id: 2, title: "Account" },
    { id: 3, title: "Address" },
  ];

  const stepStates = steps.map((step) => {
    if (step.id < currentStep) 
      return { ...step, state: "completed" };

    if (step.id === currentStep)
       return { ...step, state: "current" };
       return { ...step, state: "upcoming" };
  });

  return (
    <nav aria-label="Progress" className="w-full">
      <ol
        role="list"
        className="max-w-3xl mx-auto flex flex-col md:flex-row items-start md:items-center md:space-x-0"
      >
        {stepStates.map((s, idx) => (
          <Step key={s.id} step={s} isLast={idx === stepStates.length - 1} />
        ))}
      </ol>
    </nav>
  );
}
