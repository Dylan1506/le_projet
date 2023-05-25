import React from 'react';
// import Link from "next/link";
import { NavLink } from 'react-router-dom';


const links = [
    {
      href: "#home",
      label: "Home",
    },
    {
      href: "#service",
      label: "Service",
    },
    {
      href: "#about",
      label: "About",
    },
    {
      href: "#gallery",
      label: "Gallery",
    },
   
    {
      href: "#contact",
      label: "Contact",
    },
    {
      href: "#login",
      label: "LogIn",
    },
    {
      href: "#service",
      label: "LogUp",
    },
  ];
  

const Navbar = () => {
    return (
        <nav className="bg-dark p-4 text-white fixed top-0 w-full">
      <div className="mx-auto flex w-full max-w-6xl justify-between">
        <NavLink href="/" className="text-xl font-medium">
          <span className="text-green-500">Event</span>
          Go
        </NavLink>

        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-green-500">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    );
};

export default Navbar;