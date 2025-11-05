import React from "react";

export default function CalendarHeader({ monthLabel, onPrev, onNext }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-4">
        <button
          onClick={onPrev}
          aria-label="Previous month"
          className="p-2 rounded-md hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-indigo-400"
        >
          ◀
        </button>
        <div className="text-sm font-medium">{monthLabel}</div>
        <button
          onClick={onNext}
          aria-label="Next month"
          className="p-2 rounded-md hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-indigo-400"
        >
          ▶
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button className="px-3 py-1 rounded-lg bg-white text-sm shadow-sm">Today</button>
        <div className="text-sm text-muted">Sort By: <select className="ml-2 text-sm"><option>Month</option></select></div>
      </div>
    </div>
  );
}
