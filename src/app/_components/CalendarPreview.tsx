"use client";

import { getEventFromCalendar } from "@/actions/event.action";
import { useCalendarDays } from "@/hooks/useCalendarDays";
import { cn } from "@/utils/utils";
import { Calendar } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

type CalendarPreviewType = {
  calendar: Calendar;
};

const CalendarPreview = ({ calendar }: CalendarPreviewType) => {
  const { daysInMonth, daysOfWeek, emptyDays } = useCalendarDays();
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const { data: events = [] } = useQuery({
    queryKey: ["events", calendar.id],
    queryFn: async () => {
      if (!userId) return [];
      return await getEventFromCalendar(calendar.id);
    },
    enabled: !!userId,
  });

  return (
    <div className="w-48 rounded-lg">
      <div className="grid grid-cols-7 gap-1 text-center text-primary/100">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-[11px]">
            {day}
          </div>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7 gap-x-3 gap-y-4 text-center">
        {Array.from({ length: emptyDays }).map((_, i) => (
          <div className="py-1" key={i}></div>
        ))}

        {daysInMonth.map((day) => {
          const hasEvent = events.some((event) => {
            const eventDate = new Date(event.date);
            return eventDate.getDate() === day;
          });

          return (
            <div
              key={day}
              className={cn(
                "size-5 text-[11px] text-primary/80",
                hasEvent ? "rounded-full bg-red-500 text-white" : ""
              )}>
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarPreview;
