import { CALENDAR_PER_LINE } from "@/const/const";
import { Calendar } from "@prisma/client";
import Link from "next/link";
import CalendarPreview from "./CalendarPreview";

type CalendarListProps = {
  calendars: Calendar[];
  length: number;
};

const CalendarList = async ({ calendars, length }: CalendarListProps) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
      {calendars.map((calendar) => (
        <div key={calendar.id} className="w-full">
          <CalendarPreview calendar={calendar} />
        </div>
      ))}

      {length > CALENDAR_PER_LINE && (
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
