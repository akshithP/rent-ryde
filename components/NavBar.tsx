"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CarLogo from "../public/icons/car-logo.svg";
import { Links } from "@/types";
import { IoMenu } from "react-icons/io5";

// List containing all the link objects
const linksList: Links[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Cars",
    url: "/cars",
  },
  {
    id: 1,
    title: "About",
    url: "/about",
  },
  {
    id: 1,
    title: "Contact",
    url: "/contact",
  },
];

const NavBar = () => {
  // Use state hook for the hamburger menu, whether its open or closed
  const [menuOpen, setMenuClose] = useState(false);

  return (
    <header className="border-b border-primary py-2">
      <div
        id="logo"
        className="flex items-center justify-between  lg:max-w-7xl lg:mx-auto max-w-full px-8 flex-wrap w-full"
      >
        {/* Section for the logo icon and text */}
        <Link href="/" className="flex gap-2 mt-2 ">
          <Image
            width={38}
            height={30}
            src={CarLogo}
            alt="Rent Ryde Car Logo"
          />
          <h1 className="text-primary font-extrabold text-2xl">RENT RYDE</h1>
        </Link>

        {/* Hamburger menu button, appears if the screen width less than md*/}
        <button
          className="md:hidden block"
          onClick={() => setMenuClose(!menuOpen)}
        >
          <IoMenu className="text-4xl text-textPrimary hover:text-primary"></IoMenu>
        </button>

        {/* Navbar menu links, displayed if screen size greater than md other hidden under hamburger less than md*/}
        <nav
          className={` ${
            menuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="md:flex md:justify-between text-base font-semibold text-textPrimary">
            {linksList.map((link) => (
              <li key={link.id}>
                <Link
                  key={link.id}
                  href={link.url}
                  className={`hover:bg-primary p-2 rounded transition-colors text-xl block px-5 py-2`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
