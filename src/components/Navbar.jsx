import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons from lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "EVENTS", path: "/events" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="bg-[#191919] w-full shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="https://jthemes.net/themes/html/harmony-event/assets/images/1.site-logo.png"
                alt="Logo"
                className="h-10"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-yellow-50 text-lg hover:text-orange-400 transition duration-300 ease-in-out">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold py-2 px-4 rounded-lg shadow">
              Login
            </button>
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
              className="block text-yellow-50 text-base hover:text-orange-400 transition duration-200">
              {item.name}
            </Link>
          ))}
          <button className="w-full mt-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold py-2 px-4 rounded-lg shadow">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
