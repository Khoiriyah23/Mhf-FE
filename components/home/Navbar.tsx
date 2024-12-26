'use client';

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
    <nav className="bg-[#ececcc] bg-opacity-90 shadow-md fixed top-0 left-1/2 transform -translate-x-1/2 w-[95%] max-w-9xl z-50 rounded-lg">
      <div className="flex items-center justify-between px-4 py-3 h-[70px]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.jpg" 
            alt="logo" 
            width={60} 
            height={60} 
            className="rounded-full"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="text-[14px] text-gray-800 font-medium hover:text-green-500 transition"
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
            className="px-5 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
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
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#ececcc] bg-opacity-90 rounded-lg shadow-lg mt-2">
          <ul className="flex flex-col items-center gap-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="text-gray-800 text-[14px] font-medium hover:text-green-500 transition"
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center mt-4">
            <Button 
              type="button" 
              title="Contact Us" 
              icon="" 
              variant="green"
              className="px-5 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
