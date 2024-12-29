import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import nav from "../utilis/nav.js";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const location = useLocation();

  // Handle dropdown opening/closing
  const handleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  // Smooth close for dropdown
  const handleMouseLeave = (id) => {
    const idTimeout = setTimeout(() => {
      if (openDropdown === id) {
        setOpenDropdown(null);
      }
    }, 300);
    setTimeoutId(idTimeout);
  };

  const handleMouseEnter = (id) => {
    if (timeoutId) clearTimeout(timeoutId);
    setOpenDropdown(id);
  };

  // Helper function to check active state
  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className="bg-white drop-shadow-sm">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div>
          <img src="/logo.png" alt="Logo" className="h-16" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-center items-center gap-6 font-semibold text-lg ">
          {nav.map(({ id, text, dropdown }) => (
            <div
              key={id}
              className="relative group"
              onMouseEnter={() => dropdown && handleMouseEnter(id)}
              onMouseLeave={() => dropdown && handleMouseLeave(id)}
            >
              <NavLink
                to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                className={`flex items-center gap-1 py-1 ${
                  isActive(`/${text.toLowerCase()}`)
                    ? "text-gray-500 border-gray-500"
                    : "text-black border-transparent"
                } hover:text-gray-500  hover:border-gray-500 border-b-2 transition-all`}
              >
                {text}
                {dropdown && <AiFillCaretDown className="text-sm" />}
              </NavLink>

              {/* Dropdown Menu */}
              {dropdown && openDropdown === id && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-40 transition-all opacity-100 z-10">
                  {dropdown.map((item, index) => (
                    <NavLink
                      key={index}
                      to={`/${item.link}`}
                      className={`block px-4 py-2 hover:bg-gray-100 ${
                        isActive(`/${item.link}`) ? "bg-gray-300" : ""
                      }`}
                    >
                      {item.text}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* Contact and About Us Links */}
          
        </div>
        <div className="px-4 py-2 flex-center space-x-3">
            <NavLink to="/contact" className="py-2 block">
              Contact Us
            </NavLink>
            <NavLink to="/about" className="py-2 block">
              About Us
            </NavLink>
          </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          {nav.map(({ id, text, dropdown }) => (
            <div key={id} className="relative group border-b">
              <div
                className="flex justify-between items-center px-4 py-2"
                onClick={() => dropdown && handleDropdown(id)}
              >
                <span className={isActive(`/${text.toLowerCase()}`) ? "text-gray-500 font-bold" : ""}>
                  {text}
                </span>
                {dropdown && <AiFillCaretDown className="text-sm" />}
              </div>
              {dropdown && openDropdown === id && (
                <div className="bg-gray-50">
                  {dropdown.map((item, index) => (
                    <NavLink
                      key={index}
                      to={`/${item.link}`}
                      className={`block px-6 py-2 hover:bg-gray-100 ${
                        isActive(`/${item.link}`) ? "bg-gray-200" : ""
                      }`}
                    >
                      {item.text}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* Contact and About Us Links */}
          <div className="px-4 py-2 border-t">
            <NavLink to="/contact" className="py-2 block">
              Contact Us
            </NavLink>
            <NavLink to="/about" className="py-2 block">
              About Us
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
