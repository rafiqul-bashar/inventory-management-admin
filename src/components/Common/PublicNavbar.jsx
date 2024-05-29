import { Link, NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";
const NAVLINKS = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/pricing",
    name: "Pricing",
  },
  {
    path: "/about-us",
    name: "About Us",
  },

  {
    path: "/faq",
    name: "FAQ",
  },
];

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between py-4 px-4 md:px-0 relative">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="app_logo" className="w-10 h-10" />
          <h3 className="text-lg tracking-wide font-medium text-gray-700">
            Ecomgrove
          </h3>
        </div>
        <div className="desktop_menu hidden items-center gap-12 md:flex">
          {NAVLINKS.map((link, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                ` py-2 ${isActive ? "text-primary" : "text-gray-500"}`
              }
              to={`${link.path}`}
            >
              <span className="hidden sm:block text-lg  hover:text-primary/90 transition-all duration-200 ease-linear py-2">
                {link.name}
              </span>
            </NavLink>
          ))}
        </div>

        {/* toggle Button */}
        <div className="md:hidden ">
          <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        </div>

        {/* Desktop Login / Register Button */}
        <div className="desktop_menu hidden items-center gap-6 md:flex">
          <Link
            to="/login"
            className="text-lg text-gray-500 hover:text-primary/90 transition-all duration-200 ease-linear py-2"
          >
            Login
          </Link>
          <Link to="/register" className="btn-primary">
            Get Started
          </Link>
        </div>
      </nav>
    </>
  );
}
