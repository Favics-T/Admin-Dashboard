import React from "react";
import StepCircle from "./StepCircle";


function Step({ step, state, onClick, isLast }) {
  const isCurrent = state === "current";
  const isUpcoming = state === "upcoming";
  const isCompleted = state === "completed";

  return (
    <li
      className="flex md:items-center md:flex-1 cursor-pointer"
      role="listitem"
      aria-current={isCurrent ? "step" : undefined}
      onClick={onClick}
    >
      <div className="flex items-center md:w-full">
        <StepCircle index={step.id} state={state} />

        <div className="ml-3 hidden md:block">
          <div className={`text-sm font-semibold ${
            isCurrent ? "text-[#6E39CB]" : isUpcoming ? "text-gray-400" : "text-gray-700"
          }`}>
            {step.title}
          </div>
        </div>

        {!isLast && (
          <div className="hidden md:block flex-1" aria-hidden="true">
            <div className={`h-0.5 mx-6 ${
              isCompleted ? "bg-[#6E39CB]" : "bg-gray-200"
            }`} />
          </div>
        )}
      </div>

      <div className="md:hidden ml-3">
        <div className={`text-lg font-semibold ${
          isCurrent ? "text-[#6E39CB]" : isUpcoming ? "text-gray-400" : "text-gray-700"
        }`}>
          {step.title}
        </div>
      </div>
    </li>
  );
}

export default Step