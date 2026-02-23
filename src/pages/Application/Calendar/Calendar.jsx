import React, { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import SidebarDetails from "./SidebarDetails";
import { events } from "../../../data/events";

export default function Calendar() {
   const [date] = useState(new Date(2022, 0, 1)); 
  const [year, month] = [date.getFullYear(), date.getMonth()];
  const [, setSelected] = useState(null);


  const sidebarEvents = events.slice(0, 8);

  const handlePrev = () => {  };
  const handleNext = () => {  };

  return (
    <div className="min-h-screen bg-bg p-4 md:p-8 font-sans">
      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">
    
        <div>
          <SidebarDetails events={sidebarEvents} onSelect={setSelected} />
        </div>

        
        <div className="bg-card rounded-lg p-4 md:p-6 border-border shadow-sm">
          <CalendarHeader monthLabel="January 2022" onPrev={handlePrev} onNext={handleNext} />
          <CalendarGrid year={year} month={month} events={events} />
        </div>
      </main>
    </div>
  );
}
