import {
  Home,
  LogOutIcon,
  PlusIcon,
  Settings2,
  ShoppingCart,
} from "lucide-react";

import { NavLink, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";

import { auth } from "src/firebase/firebase.config";

const navLinks = [
  {
    path: "all-products",
    name: "Inventory",
    icon: <ShoppingCart className=" w-6  h-6 text-blue-500" />,
  },
  {
    path: "add-products",
    name: "Add New Product",
    icon: <PlusIcon className=" w-6  h-6 text-blue-500" />,
  },
  {
    path: "settings",
    name: "Settings",
    icon: <Settings2 className=" w-6  h-6 text-blue-500" />,
  },
];

export const Sidebar = () => {
  const { pathname } = useLocation();

  const logout = () => {
    signOut(auth);
  };
  return (
    <aside className="sticky left-0 top-0 h-screen flex flex-col justify-between bg-white lg:w-[16vw]">
      <nav className="flex-1">
        {/* <p className="py-7 w-full bg-pink-300">Logo </p> */}
        <img src="/Logo.png" alt="header_logo" className=" mx-auto h-20 pt-4" />
        <ul className="space-y-6 pt-4">
          <NavLink
            className={`w-full flex items-center space-x-4 py-3  px-6 hover:bg-gray-200 transition-all duration-300 ease-in-out  ${
              pathname === "/dashboard"
                ? "text-blue-500 bg-blue-100"
                : "text-gray-700"
            }`}
            to={""}
          >
            <Home className="w-6  h-6" />
            <span className="hidden sm:block text-sm">Home</span>
          </NavLink>
          {navLinks.map((link, index) => (
            <li key={index} className="">
              <NavLink
                className={({ isActive }) =>
                  ` flex items-center space-x-4 py-2 w-full px-6 ${
                    isActive ? "text-blue-500 bg-blue-100" : "text-gray-700"
                  }  hover:text-blue-500 `
                }
                to={`/dashboard/${link.path}`}
              >
                {link.icon}
                <span className="hidden sm:block text-sm">{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mb-12 bg-gray-100">
        <button
          onClick={logout}
          className="  flex items-center space-x-3 py-2 px-6 md:px-12 mt-2 text-gray-700
              hover:text-primary/90 "
        >
          <LogOutIcon className="w-6 h-6" />
          <span className="hidden sm:block text-sm">Log Out</span>
        </button>
      </div>
    </aside>
  );
};
