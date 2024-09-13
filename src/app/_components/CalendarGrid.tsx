import { getSession } from "@/actions/auth.action";
import { getUserCategoriesAndCalendars } from "@/actions/calendar.action";
import CalendarList from "./CalendarList";
import CategoryName from "./CategoryName";
import SharedCalendars from "./SharedCalendars";

async function CalendarGrid() {
  const user = await getSession();

  if (!user) {
    return <div>Connectez vous pour avoir accès à cette page</div>;
  }

  const data = await getUserCategoriesAndCalendars(user.id);

  if (!data) {
    return <div>Aucune données disponibles</div>;
  }

  return (
    <div>
      {data.categories.map((category) => {
        const calendars = data.calendars.filter(
          (calendar) => calendar.categoryId === category.id
        );

        return (
          calendars.length > 0 && (
            <section key={category.id} className="mb-6">
              <CategoryName name={category.title} />
              <CalendarList calendars={calendars} />
            </section>
          )
        );
      })}
      {data.sharedCalendars.length > 0 && (
        <section className="mt-8">
          <CategoryName name="Calendriers partagés" />
          <SharedCalendars calendars={data.sharedCalendars} />
        </section>
      )}
    </div>
  );
}

export default CalendarGrid;
