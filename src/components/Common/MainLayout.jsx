import React from "react";
import Navbar from "./PublicNavbar";
import Footer from "./PublicFooter";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <main className="min-h-screen w-screen bg-gray-50">
      <div className="flex-1 overflow-auto container ">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
}
