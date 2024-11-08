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
      <div className="flex flex-col gap-8">
        {data.categories.map(
          (category) =>
            category.calendar.length > 0 && (
              <section key={category.id} className="flex flex-col">
                <CategoryName name={category.title} />

                <div className="flex justify-center gap-4 sm:justify-start">
                  <CalendarList
                    calendars={category.calendar}
                    length={category._count.calendar}
                  />
                </div>
              </section>
            )
        )}
      </div>

      {data.sharedCalendars.length > 0 && (
        <section className="mt-8">
          <CategoryName name="Calendriers partagés" />
          <div className="flex justify-center gap-4 sm:justify-start ">
            <CalendarList
              calendars={data.sharedCalendars}
              length={data._count.sharedCalendars}
            />
          </div>
        </section>
      )}
    </div>
  );
}

export default CalendarGrid;
