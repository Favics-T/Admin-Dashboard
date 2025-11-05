import React from "react";
import DayCell from "./DayCell";
import { startOfMonth,endOfMonth,addDays,sameDay } from "../../../utils/dateUtils";


export default function CalendarGrid({ year, month, events }) {
  const first = startOfMonth(new Date(year, month, 1));
  const last = endOfMonth(new Date(year, month, 1));
  const startDay = first.getDay(); 
  const totalCells = startDay + last.getDate();
  const weeks = Math.ceil(totalCells / 7);

  
  const cells = [];
  const startDate = addDays(first, -startDay);
  for (let i = 0; i < weeks * 7; i++) {
    const d = addDays(startDate, i);
    const iso = d.toISOString().slice(0, 10);
    const cellEvents = events.filter(e => e.date === iso);
    cells.push({ date: d, events: cellEvents, isCurrentMonth: d.getMonth() === month });
  }

  
  const rows = [];
  for (let r = 0; r < weeks; r++) {
    rows.push(cells.slice(r * 7, r * 7 + 7));
  }

  return (
    <table className="w-full" role="grid" aria-label="Calendar">
      <thead>
        <tr className="text-sm text-muted">
          <th className="py-2">Sun</th>
          <th className="py-2">Mon</th>
          <th className="py-2">Tue</th>
          <th className="py-2">Wed</th>
          <th className="py-2">Thu</th>
          <th className="py-2">Fri</th>
          <th className="py-2">Sat</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((week, i) => (
          <tr key={i} className="align-top">
            {week.map((cell, j) => (
              <DayCell key={j} date={cell.date} events={cell.events} isCurrentMonth={cell.isCurrentMonth} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
