import { LINK } from "@/const/const";
import Link from "next/link";

const LinkList = () => {
  return (
    <div className="flex flex-col gap-5 text-sm">
      {LINK.map((link) => (
        <Link
          className="flex gap-2 rounded-sm py-1 pr-2 hover:bg-hover-nav"
          key={link.path}
          href={link.path}>
          {link.icon} {link.name}
        </Link>
      ))}
    </div>
  );
};

export default LinkList;
