import { CALENDAR_PER_LINE } from "@/const/const";
import { firstLetterUppercase } from "@/utils/utils";
import { Calendar } from "@prisma/client";
import Link from "next/link";
import CalendarPreview from "./CalendarPreview";

type CalendarListProps = {
  calendars: Calendar[];
  length: number;
};

const CalendarList = async ({ calendars, length }: CalendarListProps) => {
  return (
    <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-[repeat(5,_1fr)_auto]">
      {calendars.map((calendar) => {
        const title = firstLetterUppercase(calendar.title);
        return (
          <Link
            href={`/${calendar.id}`}
            key={calendar.id}
            className="flex h-fit w-[208px] flex-col gap-1 rounded-lg p-2 hover:cursor-pointer hover:bg-hover-nav">
            <CalendarPreview calendar={calendar} />
            <p className="line-clamp-2 font-bold text-foreground">{title}</p>
          </Link>
        );
      })}

      {length > CALENDAR_PER_LINE && (
        <div className="flex items-center justify-center text-center">
          <Link
            className="rounded-lg p-4 text-xs hover:cursor-pointer hover:bg-hover-nav"
            href={`/category/${calendars[0].categoryId}`}>
            Voir plus
          </Link>
        </div>
      )}
    </div>
  );
};

export default CalendarList;
