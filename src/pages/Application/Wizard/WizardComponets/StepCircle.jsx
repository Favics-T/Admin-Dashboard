import React from "react";

const steps = [
  { id: 1, title: "About" },
  { id: 2, title: "Account" },
  { id: 3, title: "Address" },
];

function StepCircle({ index, state }) {
  const base = "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium cursor-pointer transition-colors";
  
  if (state === "current")
    return <div className={`${base} text-white bg-[#6E39CB] shadow-sm`}>{index}</div>;
  if (state === "completed")
    return <div className={`${base} bg-indigo-600 text-white`}>✓</div>;
  return <div className={`${base} bg-gray-100 text-gray-500`}>{index}</div>;
}

export default StepCircle