import Image from "next/image";
import Link from "next/link";
import React from "react";
import CarLogo from "../public/icons/car-logo.svg";
import { Links } from "@/types";

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
  return (
    <nav className="flex gap-4 text-textPrimary">
      <div id="logo">
        <Link href="/" className="flex">
          <Image
            width={40}
            height={32}
            src={CarLogo}
            alt="Rent Ryde Car Logo"
          />
          <h2>RENT RYDE</h2>
        </Link>
      </div>
      <div id="navBarOptions" className="flex gap-4">
        {linksList.map((link) => (
          <Link key={link.id} href={link.url} className="hover:bg-primary">
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
