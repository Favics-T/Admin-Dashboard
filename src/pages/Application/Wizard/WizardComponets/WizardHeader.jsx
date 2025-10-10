import React from "react";

const steps = [
  { id: 1, title: "About", subtitle: null, state: "current" },
  { id: 2, title: "Account", subtitle: null, state: "upcoming" },
  { id: 3, title: "Address", subtitle: null, state: "upcoming" },
];

function StepCircle({ index, state }) {
    const base = "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium";
    if (state === "current")
    return (
      <div
        className={`${base} text-white  bg-[#6E39CB]  shadow-sm`} 
        aria-hidden="true"
      >
        {index}
      </div>
    );
  if (state === "completed")
    return (
      <div className={`${base} bg-indigo-600 text-[22px] text-white`} aria-hidden="true">
        ✓
      </div>
    );
  // upcoming 
  return (
    <div className={`${base} bg-gray-100 text-gray-500`} aria-hidden="true">
      {index}
    </div>
  );
}

function Step({ step, isLast }) {
  const isCurrent = step.state === "current";
  const isUpcoming = step.state === "upcoming";
  const isCompleted = step.state === "completed";

  return (
    <li
      className="flex md:items-center md:flex-1"
      role="listitem"
      aria-current={isCurrent ? "step" : undefined}
    >
      <div className="flex items-center md:w-full">
        
        <StepCircle index={step.id} state={step.state} />

        
        <div className="ml-3 hidden md:block">
          <div className={`text-sm font-semibold ${isCurrent ? "text-indigo-600" : isUpcoming ? "text-gray-400" : "text-gray-700"}`}>
            {step.title}
          </div>
          {step.subtitle && (
            <div className="text-xs text-gray-400">{step.subtitle}</div>
          )}
        </div>

        
        {!isLast && (
          <div className="hidden md:block flex-1" aria-hidden="true">
            <div className={`h-0.5 mx-6 ${isCompleted ? "bg-indigo-600" : "bg-gray-200"}`} />
          </div>
        )}
      </div>

      
      <div className="md:hidden ml-3">
        <div className={`text-lg font-semibold ${isCurrent ? "text-[#6E39CB]" : isUpcoming ? "text-gray-400" : "text-gray-700"}`}>
          {step.title}
        </div>
      </div>
    </li>
  );
}

export default function Stepper() {
  
  const items = steps.map((s) => ({ ...s }));

  return (
    <nav aria-label="Progress" className="w-full">
      <ol
        role="list"
        className="max-w-3xl mx-auto flex flex-col md:flex-row items-start md:items-center md:space-x-0"
      >
        {items.map((s, idx) => (
          <Step key={s.id} step={s} isLast={idx === items.length - 1} />
        ))}
      </ol>

        </nav>
  );
}
