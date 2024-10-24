"use client";

import CalendarIcon from "@/icons/CalendarIcon";
import { Menu, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import LinkList from "./LinkList";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const renderMobileMenu = () => (
    <div
      className={`fixed left-0 top-0 z-50 h-full w-fit bg-muted p-4 shadow-lg transition-transform duration-500 ease-in-out ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } sm:hidden`}>
      <div className="-ml-2 flex items-center justify-between px-2">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md px-3 py-1 text-lg font-medium leading-9 hover:bg-hover-nav">
          <CalendarIcon size={16} />
          Calendar
        </Link>
        <Plus
          size={16}
          className="rotate-45 transition-transform duration-300 hover:cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
      <div className="mt-4">
        <LinkList />
      </div>
    </div>
  );

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-muted px-6 py-2 sm:min-h-full sm:w-fit sm:px-2">
      <div className="pt-2 sm:flex sm:items-center sm:p-0">
        <Menu
          size={16}
          onClick={toggleMenu}
          className="transition-transform duration-300 hover:cursor-pointer sm:hidden"
        />
      </div>
      {renderMobileMenu()}

      <div className="hidden sm:flex sm:w-full sm:flex-col sm:gap-1">
        <Link
          href="/"
          className="flex w-full gap-2 rounded-md px-3 py-1 text-lg font-medium leading-9 hover:bg-hover-nav sm:px-2">
          <CalendarIcon size={20} />
          Calendar
        </Link>
        <LinkList />
      </div>
    </div>
  );
};

export default Navbar;
