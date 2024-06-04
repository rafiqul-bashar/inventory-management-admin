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
import useAuthStore from "src/store/authStore";
import { AVATAR_PIC } from "src/utils/constants";

const navLinks = [
  {
    path: "all-products",
    name: "Inventory",
    icon: <ShoppingCart className=" w-6 mx-auto h-6 text-blue-500 sm:mx-4" />,
  },
  {
    path: "add-products",
    name: "Add New Product",
    icon: <PlusIcon className=" w-6  h-6 mx-auto text-blue-500 sm:mx-4" />,
  },
  {
    path: "profile",
    name: "Profile",
    icon: <User2 className=" w-6  h-6 mx-auto text-blue-500 sm:mx-4" />,
  },
  {
    path: "settings",
    name: "Settings",
    icon: <Settings2 className=" w-6  h-6 mx-auto text-blue-500 sm:mx-4" />,
  },
];

export const Sidebar = () => {
  const { pathname } = useLocation();
  const { userData, logOutFromState } = useAuthStore((state) => state);
  const logout = () => {
    signOut(auth);
    logOutFromState();
  };
  return (
    <aside className="sticky left-0 top-0 h-screen flex flex-col justify-between bg-white lg:w-[14vw]">
      <nav className="flex-1">
        <div className="h-20 bg-gray-700 flex justify-center items-center">
          <h3 className="sm:text-2xl tracking-wide font-medium text-gray-100 text-center px-2">
            Dashboard
          </h3>
        </div>

        <ul className="space-y-6 pt-4">
          <div className="flex flex-col items-center sm:p-2">
            <img
              src={userData?.displayPicture || AVATAR_PIC}
              alt={userData?.name}
              className="w-10 h-10 rounded-full bg-gray-500"
            />
            <h2 className="text-xs sm:text-lg font-semibold">
              {userData?.name}
            </h2>
          </div>
          <NavLink
            className={`w-full flex items-center py-3 hover:bg-gray-200 transition-all duration-300 ease-in-out  ${
              pathname === "/dashboard"
                ? "text-blue-500 bg-blue-100"
                : "text-gray-700"
            }`}
            to={""}
          >
            <Home className="w-6 h-6 text-blue-500 mx-auto sm:mx-4" />
            <span className="hidden sm:block font-medium ">Home</span>
          </NavLink>
          {navLinks.map((link, index) => (
            <li key={index} className="">
              <NavLink
                className={({ isActive }) =>
                  ` flex items-center py-2 w-full ${
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

          <button
            onClick={logout}
            className="flex items-center space-x-3 py-6  md:px-12  text-gray-100 bg-gray-700 hover:bg-gray-500 w-full"
          >
            <LogOutIcon className="w-6 h-6 ml-auto" />
            <span className="hidden sm:block text-sm">Log Out</span>
          </button>
        </ul>
      </nav>
    </aside>
  );
};
