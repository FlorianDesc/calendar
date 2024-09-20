import { Calendar } from "@prisma/client";
import Link from "next/link";
import CalendarPreview from "./CalendarPreview";

type CalendarListProps = {
  calendars: Calendar[];
  lenght: number;
};

const CalendarList = ({ calendars, lenght }: CalendarListProps) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {calendars.map((calendar) => (
        <div key={calendar.id} className="w-full">
          <CalendarPreview />
        </div>
      ))}

      {lenght > 5 && (
        <Link
          className="flex min-w-48 items-center justify-center rounded-lg p-1 text-xs hover:cursor-pointer hover:bg-hover-nav"
          href={`/category/${calendars[0].categoryId}`}>
          Voir plus
        </Link>
      )}
    </div>
  );
};

export default CalendarList;
