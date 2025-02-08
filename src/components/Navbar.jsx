/* eslint-disable react/prop-types */
import { Menu, X } from "lucide-react";
import { logo_abhyananda } from "../assets";
import { navLinks } from "../constants";

const Navbar = ({ isOpen, setIsOpen }) => {
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="w-full relative">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo_abhyananda} alt="Logo" className="w-16 h-16" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="hover:text-orange-500 active:text-orange-500 cursor-pointer"
            >
              {nav.title}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white transition-transform duration-300 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100 duration-300"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-start px-6 py-4 space-y-4">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="text-gray-700 font-medium hover:text-orange-500 cursor-pointer"
              onClick={toggleMenu}
            >
              {nav.title}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
