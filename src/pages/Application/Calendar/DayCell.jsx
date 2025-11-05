import React from "react";
import { formatDay } from "../../../utils/dateUtils";
import EventChip from "./EventChip";

export default function DayCell({ date, isCurrentMonth, events = [] }) {
  return (
    <td className={`align-top p-2 h-28 day-border ${isCurrentMonth ? 'bg-white' : 'bg-transparent'}`} role="gridcell" aria-selected={false}>
      <div className="flex justify-between items-start">
        <span className={`text-sm ${isCurrentMonth ? 'text-gray-800' : 'text-muted'}`}>{formatDay(date)}</span>
      </div>

      <div className="mt-2 flex flex-col gap-1">
        {events.slice(0, 2).map((ev) => (
          <EventChip key={ev.id} event={ev} />
        ))}
        {events.length > 2 && <div className="text-xs text-muted">+{events.length - 2} more</div>}
      </div>
    </td>
  );
}
