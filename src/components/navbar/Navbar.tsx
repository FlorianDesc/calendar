import CalendarIcon from "@/icons/CalendarIcon";
import Link from "next/link";
import LinkList from "./LinkList";

const Navbar = () => {
  return (
    <div className="flex min-h-screen w-1/6 flex-col gap-4 bg-muted p-2">
      <div className="flex items-center justify-between px-2 pb-1">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md px-2 pb-2 text-lg font-medium leading-9 hover:bg-hover-nav">
          <CalendarIcon size={20} />
          Calendar
        </Link>
      </div>
      <LinkList />
    </div>
  );
};

export default Navbar;
