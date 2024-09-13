import { getSession } from "@/actions/auth.action";
import { redirect } from "next/navigation";
import CalendarGrid from "./_components/CalendarGrid";

export default async function page() {
  const user = await getSession();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="text-sm">
      <CalendarGrid />
    </div>
  );
}
