import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-black text-white">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="Virtual Reality Logo" className="h-10 w-10 mr-2" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-orange-400 transition">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <a href="#" className="py-2 px-4 border rounded-md hover:bg-gray-700">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-red-500 py-2 px-4 border rounded-md hover:opacity-90 transition"
            >
              Create an account
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden">
            <button onClick={toggleNavBar} className="p-2">
              {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileDrawerOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black text-white shadow-md">
            <ul className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block py-2 px-4 hover:text-orange-400 transition"
                    onClick={() => setMobileDrawerOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <hr className="w-4/5 border-gray-600" />
              <li>
                <a href="#" className="py-2 px-4 border rounded-md hover:bg-gray-700 block text-center">
                  Sign In
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-orange-500 to-red-500 py-2 px-4 border rounded-md hover:opacity-90 transition block text-center"
                >
                  Create an account
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
