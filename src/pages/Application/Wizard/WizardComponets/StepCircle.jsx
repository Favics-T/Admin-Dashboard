import React from "react";

// const steps = [
//   { id: 1, title: "About" },
//   { id: 2, title: "Account" },
//   { id: 3, title: "Address" },
// ];

function StepCircle({ index, state }) {
  const base =
    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-300";


  if (state === "current")
    return (
      <div
        className={`${base} text-white bg-[#6E39CB] shadow-sm`}
        aria-hidden="true"
      >
        {index}
      </div>
    );
  if (state === "completed")
    return (
      <div
        className={`${base} bg-[#6E39CB] text-[18px] text-white`}
        aria-hidden="true"
      >
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

export default StepCircle