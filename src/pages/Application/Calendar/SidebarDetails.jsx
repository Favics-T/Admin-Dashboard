import React from "react";

export default function SidebarDetails({ events, onSelect }) {
  return (
    <aside className="w-full md:w-72 p-4 bg-card rounded-lg shadow-xl border-border">
      <h2 className="text-sm font-semibold mb-2">Details Day</h2>
      <p className="text-xs text-muted mb-4">Don't miss scheduled events</p>

      <ul className="flex flex-col gap-3">
        {events.map((ev) => (
          <li key={ev.id} className="flex items-center justify-between gap-3 bg-white p-2 rounded-md shadow-sm">
            <div className="flex items-start gap-3">
              <div className={`w-3 h-3 rounded-md ${ev.color}`} aria-hidden />
              <div>
                <div className="text-sm font-medium">{ev.title}</div>
                <div className="text-xs text-muted">{ev.location}</div>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div className="text-xs text-muted">{ev.time}</div>
              <button onClick={() => onSelect(ev)} className="mt-1 text-xs text-indigo-600 hover:underline">View</button>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
