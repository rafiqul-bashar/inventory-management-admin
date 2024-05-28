import { Sidebar } from "./Common/Sidebar";
import { DashboardHeader } from "./Common/DashboardHeader";
import { Outlet } from "react-router-dom";
import { DashboardFooter } from "./Common/DashboardFooter";

export default function DashboardLayout() {
  return (
    <main className="min-h-screen flex flex-1 ">
      {/* Left Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 overflow-auto ">
        <DashboardHeader />
        <Outlet />
        <DashboardFooter />
      </div>
    </main>
  );
}
