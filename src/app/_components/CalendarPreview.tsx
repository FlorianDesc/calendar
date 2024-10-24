"use client";

import { useCalendarDays } from "@/hooks/useCalendarDays";

const CalendarPreview = () => {
  const { daysInMonth, daysOfWeek, emptyDays } = useCalendarDays();

  console.log(emptyDays);

  return (
    <div className="w-48 rounded-lg bg-background p-1 hover:cursor-pointer hover:bg-hover-nav">
      <div className="grid grid-cols-7 gap-1 text-center text-primary/100">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-[11px]">
            {day}
          </div>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7 gap-1 text-center">
        {Array.from({ length: emptyDays }).map((emptyDay, i) => {
          return <div className="py-1" key={i}></div>;
        })}
        {daysInMonth.map((day) => (
          <div key={day} className="py-1 text-[11px] text-primary/80">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPreview;
