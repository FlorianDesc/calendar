import { getSession } from "@/actions/auth.action";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import CalendarGrid from "./_components/CalendarGrid";
import Loading from "./loading";

export default async function page() {
  const user = await getSession();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="text-sm">
      <Suspense fallback={<Loading />}>
        <CalendarGrid />
      </Suspense>
    </div>
  );
}
