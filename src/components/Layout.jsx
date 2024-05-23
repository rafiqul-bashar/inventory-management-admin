//  This is just a basic layout is active. Change according to need.
//  Keep the on suits the project and remove everything else

import { Footer } from "./Common/Footer";
import { Header } from "./Common/Header";
import { Sidebar } from "./Common/Sidebar";

export default function Layout() {
  return <SimpleSandwich />;
}
//  Classic
const SimpleSandwich = () => {
  return (
    <>
      <Header />
      <main className="h-[40vh] bg-red-100">
        <h2>Page contents Here </h2>
      </main>
      <Footer />
    </>
  );
};

//  Classic but Layout as a Wrapper component for pages
const SimpleSandwichWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <main className="h-[40vh] bg-red-100">{children}</main>
      <Footer />
    </>
  );
};

//  Dynamic Navigation with fixed sidebar
const SimpleWithFixedSideBar = () => {
  return (
    <>
      <main className="min-h-screen  flex flex-1 bg-gray-100">
        {/* Left Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <Header />
          <div className="h-[40vh] bg-red-100">
            <p>
              render Outlet if using React Router Dom to go to different pages{" "}
            </p>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
};
