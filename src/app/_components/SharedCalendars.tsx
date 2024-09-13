import { Calendar } from "@prisma/client";
import CalendarPreview from "./CalendarPreview";

type SharedCalendarsProps = {
  calendars: Calendar[];
};

const SharedCalendars = ({ calendars }: SharedCalendarsProps) => {
  return (
    <div className="flex gap-4">
      {calendars.map((calendar) => {
        return (
          <div key={calendar.id}>
            <CalendarPreview />
          </div>
        );
      })}
    </div>
  );
};

export default SharedCalendars;
