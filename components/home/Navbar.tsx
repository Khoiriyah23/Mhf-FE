'use Client'

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-sm fixed top-0 left-0 w-full bg-[#ececcc] bg-opacity-80 z-50">
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
              className="text-[16px] text-[#333] font-medium hover:text-green-600 transition"
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
        
        <button aria-label="Open Menu" className="text-black">
          {/* Icon or hamburger SVG */}
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
