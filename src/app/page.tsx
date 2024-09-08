import { getSession } from "@/actions/auth.action";
import { redirect } from "next/navigation";
import CalendarLine from "./_components/CalendarLine";

export default async function page() {
  const user = await getSession();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="text-sm">
      <CalendarLine />
    </div>
  );
}
