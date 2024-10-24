import { getSession } from "@/actions/auth.action";
import DialogCreateCalendar from "@/components/DialogCreateCalendar";
import DialogCreateEvent from "@/components/DialogCreateEvent";
import { redirect } from "next/navigation";
import CalendarGrid from "./_components/CalendarGrid";

export default async function page() {
  const user = await getSession();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="flex flex-col gap-4 text-sm">
      {user && (
        <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:items-start sm:justify-start sm:gap-3">
          <DialogCreateCalendar />
          <DialogCreateEvent />
        </div>
      )}

      <CalendarGrid />
    </div>
  );
}
