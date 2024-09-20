import { getSession } from "@/actions/auth.action";
import { getUserCategoriesAndCalendars } from "@/actions/calendar.action";
import CalendarList from "./CalendarList";
import CategoryName from "./CategoryName";

async function CalendarGrid() {
  const user = await getSession();

  if (!user) {
    return <div>Connectez-vous pour avoir accès à cette page</div>;
  }

  const data = await getUserCategoriesAndCalendars(user.id);

  if (!data) {
    return <div>Aucune donnée disponible</div>;
  }

  return (
    <div>
      {data.categories.map(
        (category) =>
          category.calendar.length > 0 && (
            <section key={category.id} className="mb-6">
              <CategoryName name={category.title} />
              <div className="flex gap-4">
                <CalendarList
                  calendars={category.calendar}
                  lenght={category._count.calendar}
                />
              </div>
            </section>
          )
      )}

      {data.sharedCalendars.length > 0 && (
        <section className="mt-8">
          <CategoryName name="Calendriers partagés" />
          <CalendarList
            calendars={data.sharedCalendars}
            lenght={data._count.sharedCalendars}
          />
        </section>
      )}
    </div>
  );
}

export default CalendarGrid;
