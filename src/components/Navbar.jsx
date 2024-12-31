import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import nav from "../utilis/nav.js";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isDotsMenuOpen, setIsDotsMenuOpen] = useState(false);
  const location = useLocation();

  const handleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const isActive = (path) => location.pathname.startsWith(path);

  const handleNavItemClick = (id, dropdown) => {
    if (!dropdown) {
      setIsMenuOpen(false);
      setOpenDropdown(null);
    } else {
      handleDropdown(id);
    }
  };

  return (
    <div className="fixed md:relative w-full z-10 bg-white drop-shadow-sm">
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
                } hover:text-gray-500 hover:border-gray-500 border-b-2 transition-all`}
              >
                {text}
                {dropdown && <AiFillCaretDown className="text-sm" />}
              </NavLink>
              {dropdown && openDropdown === id && (
                <div
                  className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-40 z-10"
                  onMouseEnter={() => setOpenDropdown(id)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
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
        </div>

        {/* Three Dots Menu */}
        <div
          className="relative group"
          onMouseEnter={() => setIsDotsMenuOpen(true)}
          onMouseLeave={() => setIsDotsMenuOpen(false)}
        >
          <button className="p-2">
            <FaBars size={24} />
          </button>
          {isDotsMenuOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md w-40 z-10">
              <NavLink
                to="/settings"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Settings
              </NavLink>
              <NavLink
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Profile
              </NavLink>
              <NavLink
                to="/logout"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
