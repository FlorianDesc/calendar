import { LINK } from "@/const/const";
import Link from "next/link";

const LinkList = () => {
  return (
    <div className="flex flex-col gap-2 text-sm">
      {LINK.map((link) => (
        <Link
          className="flex gap-2 rounded-sm px-3 py-2 hover:bg-hover-nav"
          key={link.path}
          href={link.path}>
          {link.icon} {link.name}
        </Link>
      ))}
    </div>
  );
};

export default LinkList;
