import React from "react";
import Step from "./Step";

const steps = [
  { id: 1, title: "About" },
  { id: 2, title: "Account" },
  { id: 3, title: "Address" },
];


export default function Stepper({ currentStep, setCurrentStep }) {
  return (
    <nav aria-label="Progress" className="w-full">
      <ol className="max-w-3xl mx-auto flex flex-col md:flex-row items-start md:items-center md:space-x-0">
        {steps.map((step, idx) => {
          let state = "upcoming";
          if (step.id < currentStep) state = "completed";
          else if (step.id === currentStep) state = "current";

          return (
            <Step
              key={step.id}
              step={step}
              state={state}
              isLast={idx === steps.length - 1}
              onClick={() => setCurrentStep(step.id)}
            />
          );
        })}
      </ol>
    </nav>
  );
}