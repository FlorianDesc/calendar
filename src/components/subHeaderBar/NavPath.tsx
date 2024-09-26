"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DialogCreateCalendar from "../DialogCreateCalendar";

const NavPath = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const pathsArray = pathname.split("/").filter((elem) => elem !== "");

  return (
    <div className="flex w-full justify-between p-2">
      <div className="flex gap-3 text-xs">
        <Link
          className={cn(
            "hover:underline",
            pathsArray.length > 0 ? "text-primary/50" : ""
          )}
          href="/">
          Accueil
        </Link>
        {pathsArray.length > 0 && (
          <ChevronRight size={16} className="text-primary/50" />
        )}

        {pathsArray.map((path, index) => {
          const isLast = index === pathsArray.length - 1;
          return (
            <div key={path} className="flex gap-3">
              <Link
                href={`/${path}`}
                className={`hover:underline ${
                  isLast ? "" : "text-primary/50"
                } hover:text-gray-700`}>
                {path}
              </Link>
              {!isLast && (
                <ChevronRight size={16} className="text-primary/50" />
              )}
            </div>
          );
        })}
      </div>
      {session?.user && <DialogCreateCalendar />}
    </div>
  );
};

export default NavPath;
