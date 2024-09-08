import { getSession } from "@/actions/auth.action";
import { getUserCategoriesAndCalendars } from "@/actions/calendar.action";
import CalendarList from "./CalendarList";
import CategoryName from "./CategoryName";
import SharedCalendars from "./SharedCalendars";

const CalendarLine = async () => {
  const user = await getSession();

  if (!user) {
    return;
  }

  const data = await getUserCategoriesAndCalendars(user.id);

  if (!data) {
    return <div>Vous n&apos;avez aucunes catégories et aucuns calendriers</div>;
  }

  console.log(data);

  return (
    <div className="flex flex-col">
      {data.categories.map((category) => {
        const calendars = [...data.calendars].filter(
          (calendar) => calendar.categoryId === category.id
        );

        return (
          <div key={category.title} className="flex flex-col gap-2">
            <CategoryName name={category.title} />
            <CalendarList calendars={calendars} />
            <SharedCalendars />
          </div>
        );
      })}
    </div>
  );
};

export default CalendarLine;
