import { Calendar } from "@prisma/client";
import CalendarPreview from "./CalendarPreview";

type CalendarListProps = {
  calendars: Calendar[];
};

const CalendarList = ({ calendars }: CalendarListProps) => {
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

export default CalendarList;
