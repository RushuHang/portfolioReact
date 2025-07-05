import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import Reveal from "../utils/Reveal";

export default function Navbar() {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (menu === true) {
        openMenu(false);
      }

      if (showMenu === false) {
        setShowMenu(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menu, showMenu]);
  return (
    <nav className="flex flex-wrap justify-between items-center text-white px-10 py-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>
      <ul className="mx-24 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex hidden gap-6">
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          <a href="#About">About</a>
        </li>
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          <a href="#Experience">Exprience</a>
        </li>
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          <a href="#Footer">Contacts</a>
        </li>
      </ul>
      <ul
        className={`${
          menu ? "translate-x-0 opacity-100" : "opacity-0 translate-x-full"
        } md:hidden flex flex-col absolute top-[75px] right-0 items-center justify-center gap-8 h-dvh bg-black z-[999] w-full transition-all duration-500`}
      >
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          <a href="#About">About</a>
        </li>
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          <a href="#Experience">Exprience</a>
        </li>
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          <a href="#Footer">Contacts</a>
        </li>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
}
