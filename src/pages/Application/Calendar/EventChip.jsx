import React from "react";


export default function EventChip({ event }) {
  return (
    <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-md text-xs font-medium ${event.color} text-gray-800 shadow-sm`}>
      <span className="w-2 h-2 rounded-full bg-white/60" />
      <span className="truncate max-w-[120px]">{event.title}</span>
    </div>
  );
}
