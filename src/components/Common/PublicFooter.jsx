import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="container py-8 px-4 md:px-0">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row  md:items-center justify-between   border-t border-gray-300 space-y-4 py-6">
        <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="app_logo" className="w-10 h-10" />
              <h3 className="text-lg tracking-wide font-medium text-gray-700">
                Ecomgrove
              </h3>
            </div>
          </div>
          <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
            <li>
              <a rel="noopener noreferrer" href="#">
                Instagram
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">
                Facebook
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="flex flex-col-reverse md:flex-row  md:items-center justify-between  gap-2 border-t border-gray-300 pt-3">
        <p>Copyright © Rafiqul Bashar</p>
        <div className="flex items-center text-gray-400 gap-4">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
