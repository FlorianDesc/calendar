import { LINK } from "@/const/const";
import Link from "next/link";

const LinkList = () => {
  return (
    <div className="flex flex-col gap-1">
      {LINK.map((link) => (
        <Link
          className="rounded-sm px-2 py-1 hover:bg-hover-nav"
          key={link.path}
          href={link.path}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default LinkList;
