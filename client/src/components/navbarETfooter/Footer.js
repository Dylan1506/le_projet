import React from 'react';
import { NavLink } from 'react-router-dom';
// import Link from 'next/link';
import { HiArrowRight, HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";



// declarations des constances a utiliser 
const branches = ["Tunis", "Bamako", "Abidjan", "Dallas"];
const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/service", label: "Service" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];



const Footer = () => {
    return (
        <footer className="bg-dark p-8 text-white">
      <div className="mx-auto flex w-full max-w-6xl justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-medium">Branches</h3>

          <ul className="space-y-2">
            {branches.map((item) => (
              <li key={item}>
                <NavLink href="/" className="flex items-center gap-2">
                  <HiMapPin className="text-green-500" />
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-medium">Quick Links</h3>

          <ul className="space-y-2">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} className="flex items-center gap-2">
                  <HiArrowRight className="text-green-500" />
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-medium">Contact Info</h3>

          <ul className="space-y-2">
            <li>
              <NavLink href="/" className="flex items-center gap-2">
                <HiPhone className="text-green-500" />
                +216 58 278 913
              </NavLink>
            </li>

            <li>
              <NavLink href="/" className="flex items-center gap-2">
                <HiEnvelope className="text-green-500" />
                Dylan@gmail.com
              </NavLink>
            </li>

            <li>
              <NavLink href="/" className="flex items-center gap-2">
                <HiMapPin className="text-green-500" />
                Tunis, Tunisie
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-medium">Follow Us</h3>

          <ul className="space-y-2">
            <li>
              <NavLink href="/" className="flex items-center gap-2">
                <BsFacebook className="text-green-500" />
                Facebook
              </NavLink>
            </li>

            <li>
              <NavLink href="/" className="flex items-center gap-2">
                <BsTwitter className="text-green-500" />
                Twitter
              </NavLink>
            </li>

            <li>
              <NavLink href="/" className="flex items-center gap-2">
                <BsLinkedin className="text-green-500" />
                Linked In
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    );
};

export default Footer;