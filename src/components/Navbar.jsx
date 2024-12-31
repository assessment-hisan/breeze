import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import nav from "../utilis/nav.js";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  // Handle dropdown opening/closing
  const handleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  // Helper function to check active state
  const isActive = (path) => location.pathname.startsWith(path);

  // Close menu and handle dropdown logic
  const handleNavItemClick = (id, dropdown) => {
    if (!dropdown) {
      setIsMenuOpen(false);
      setOpenDropdown(null);
    } else {
      handleDropdown(id);
    }
  };

  return ( 
    <div className="border-b-2 border-black/50">
      <div className="fixed md:relative w-full z-30 max-w-[120rem] mx-auto bg-white drop-shadow-sm ">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div>
          <img src="/logo.png" alt="Logo" className="h-14" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-wrap justify-center items-center gap-6 font-semibold text-lg">
          {nav.map(({ id, text, dropdown }) => (
            <div
              key={id}
              className="relative group"
              onMouseEnter={() => dropdown && setOpenDropdown(id)}
              onMouseLeave={() => dropdown && setOpenDropdown(null)}
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
              {dropdown && openDropdown === id && (
                <div className="absolute top-full left-0 pt-4 bg-white shadow-lg rounded-md w-40 z-20">
                  {dropdown.map((item, index) => (
                    <NavLink
                      key={index}
                      to={`/${item.link}`}
                      className={`block px-4 py-2 hover:bg-gray-100 rounded-md ${
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
        </div>

        <div className="hidden lg:flex items-center justify-center px-4 py-2  space-x-3">
            <NavLink to="/contact" className="py-2 block">
              Contact Us
            </NavLink>
            <NavLink to="/about" className="py-2 block">
              About Us
            </NavLink>
          </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(true)}>
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
  <div className="absolute top-0 left-0 w-full h-full bg-white shadow-lg  flex flex-col transition-transform">
    {/* Header */}
    <div className="bg-white flex justify-between items-center p-4 border-b">
      <img src="/logo.png" alt="Logo" className="h-12" />
      <button onClick={() => setIsMenuOpen(false)}>
        <FaTimes size={24} />
      </button>
    </div>

    {/* Navigation Items */}
    <div className="bg-white flex flex-col p-4 space-y-4">
      {nav.map(({ id, text, link, dropdown }) => (
        <div key={id}>
          {dropdown ? (
            // Items with dropdown
            <>
              <div
                className="flex justify-between items-center px-4 py-2 border-b cursor-pointer"
                onMouseEnter={() => handleNavItemClick(id, dropdown)}
              >
                <span className={isActive(link) ? "text-gray-500 font-bold" : ""}>
                  {text}
                </span>
                <AiFillCaretDown className="text-sm" />
              </div>
              {openDropdown === id && (
                <div className="bg-gray-50">
                  {dropdown.map((item, index) => (
                    <NavLink
                      key={index}
                      to={`/${item.link}`}
                      className={`block px-6 py-2 hover:bg-gray-100 ${isActive(`/${item.link}`) ? "bg-gray-200" : ""}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.text}
                    </NavLink>
                  ))}
                </div>
              )}
            </>
          ) : (
            // Direct links (e.g., Home, Brands)
            <NavLink
              to={link}
              className={`block px-4 py-2 border-b ${isActive(link) ? "text-gray-500 font-bold" : ""}`}
              onClick={() => setIsMenuOpen(false)} // Close menu when navigating
            >
              {text}
            </NavLink>
          )}
        </div>
        
      ))}
      <div className="flex items-center justify-center px-4 py-2  space-x-3">
            <NavLink to="/contact" className="py-2 block" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </NavLink>
            <NavLink to="/about" className="py-2 block" onClick={() => setIsMenuOpen(false)}>
              About Us
            </NavLink>
          </div>
    </div>
  </div>
)}
    </div>
    </div>
  );
};

export default Navbar;
