import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import avatar from "../assets/avatar.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState({ name: "Chirag Rathod" }); // simulate user logged in

  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  // Close dropdown if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "EVENTS", path: "/eventCategory" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="bg-[#191919] w-full shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://jthemes.net/themes/html/harmony-event/assets/images/1.site-logo.png"
              alt="Logo"
              className="h-10"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-yellow-50 text-lg hover:text-orange-400 transition duration-300">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Login or Avatar with Dropdown */}
          <div className="hidden md:block relative" ref={dropdownRef}>
            {user ? (
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={toggleDropdown}>
                <img
                  src={avatar}
                  alt="avatar"
                  className="h-10 w-10 rounded-full border-2 border-orange-500"
                />
                <span className="text-white font-semibold">{user.name}</span>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold py-2 px-4 rounded-lg shadow">
                  Login
                </button>
              </Link>
            )}

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                <Link
                  to="/account"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Account
                </Link>
                <Link
                  to="/mybookings"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  My Bookings
                </Link>
                <button
                  onClick={() => {
                    // handle logout logic here
                    setUser(null);
                    setShowDropdown(false);
                  }}
                  className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block text-yellow-50 text-base hover:text-orange-400 transition">
              {item.name}
            </Link>
          ))}
          {user ? (
            <div className="mt-2">
              <div className="flex items-center space-x-2">
                <img
                  src={avatar}
                  alt="avatar"
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-white font-semibold">{user.name}</span>
              </div>
              <Link
                to="/account"
                className="block text-white mt-2 hover:text-orange-400">
                Account
              </Link>
              <Link
                to="/mybookings"
                className="block text-white mt-1 hover:text-orange-400">
                My Bookings
              </Link>
              <button
                onClick={() => setUser(null)}
                className="mt-1 text-left w-full text-white hover:text-orange-400">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="w-full mt-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold py-2 px-4 rounded-lg shadow">
                Login
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
