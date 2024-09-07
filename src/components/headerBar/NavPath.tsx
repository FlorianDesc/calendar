"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavPath = () => {
  const pathname = usePathname();
  const pathsArray = pathname.split("/").filter((elem) => elem !== "");

  return (
    <div className="w-full p-2">
      <div className="flex items-center gap-3 text-sm">
        <Link
          className={pathsArray.length > 0 ? "text-primary/50" : ""}
          href="/">
          Accueil
        </Link>
        {pathsArray.length > 0 && (
          <ChevronRight size={16} className="text-primary/50" />
        )}

        {pathsArray.map((path, index) => {
          const isLast = index === pathsArray.length - 1;
          return (
            <div key={path} className="flex items-center gap-3">
              <Link
                href={`/${path}`}
                className={`text-sm ${
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
    </div>
  );
};

export default NavPath;
