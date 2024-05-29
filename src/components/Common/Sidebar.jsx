import {
  Home,
  LogOutIcon,
  PlusIcon,
  Settings2,
  ShoppingCart,
  User2,
} from "lucide-react";

import { NavLink, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";

import { auth } from "src/firebase/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

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
    path: "profile",
    name: "Profile",
    icon: <User2 className=" w-6  h-6 text-blue-500" />,
  },
  {
    path: "settings",
    name: "Settings",
    icon: <Settings2 className=" w-6  h-6 text-blue-500" />,
  },
];

export const Sidebar = () => {
  const { pathname } = useLocation();
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
  return (
    <aside className="sticky left-0 top-0 h-screen flex flex-col justify-between bg-white lg:w-[16vw]">
      <nav className="flex-1">
        <h3 className="text-2xl tracking-wide font-medium text-gray-700 text-center py-4">
          Dashboard
        </h3>

        <ul className="space-y-6 pt-4">
          <div className="flex items-center p-2 space-x-4">
            <img
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716854400&semt=sph"
              alt=""
              className="w-12 h-12 rounded-full dark:bg-gray-500"
            />
            <h2 className="text-lg font-semibold">
              {user?.displayName || user?.email}
            </h2>
          </div>
          <NavLink
            className={`w-full flex items-center space-x-4 py-3  px-6 hover:bg-gray-200 transition-all duration-300 ease-in-out  ${
              pathname === "/dashboard"
                ? "text-blue-500 bg-blue-100"
                : "text-gray-700"
            }`}
            to={""}
          >
            <Home className="w-6  h-6 text-blue-500" />
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
