'use client'

import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-md fixed top-0 left-1/2 h-[80px] transform -translate-x-1/2 w-[95%] max-w-9xl bg-[#ececcc] bg-opacity-90 rounded-lg z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image 
          src="/images/logo.jpg" 
          alt="logo" 
          width={80} 
          height={80}
          className="rounded-full"
        />
      </Link>

      {/* Desktop Navigation Links */}
      <ul className="hidden lg:flex gap-10">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="text-[16px] text-white font-medium hover:text-green-500 transition"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Contact Us Button */}
      <div className="hidden lg:flex">
        <Button 
          type="button" 
          title="Contact Us" 
          icon="" 
          variant="green"
          className="px-6 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition"
        />
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#ececcc] bg-opacity-90 rounded-lg shadow-md transition-all ease-in-out duration-300">
          <ul className="flex flex-col items-center gap-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="text-white text-[16px] font-medium hover:text-green-500 transition"
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Us Button (Mobile) */}
          <div className="flex items-center justify-center mt-4">
            <Button 
              type="button" 
              title="Contact Us" 
              icon="" 
              variant="green"
              className="px-6 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
