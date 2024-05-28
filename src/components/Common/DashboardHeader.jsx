import { Link } from "react-router-dom";

export const DashboardHeader = () => {
  return (
    <header>
      <div className="container bg-red-300 flex items-center">
        <div>
          <p className="p-3 bg-red-300">Logo</p>
        </div>
        <div className="hidden md:block desktop_links">
          <div className="flex items-center gap-3 ">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
        <div className="md:hidden mobile_menu">
          <div className="flex flex-col gap-3 ">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </header>
  );
};
