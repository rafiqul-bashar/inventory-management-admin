import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="container py-8 px-4 md:px-0">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row  md:items-center justify-between   border-t border-gray-300 space-y-4 py-6">
        <div className="flex items-center gap-3 mx-auto">
          <img src="/logo.png" alt="app_logo" className="w-10 h-10" />
          <h3 className="text-lg tracking-wide font-medium text-gray-700">
            Ecomgrove
          </h3>
        </div>
        <div className="flex flex-col md:flex-row items-center text-gray-400 gap-2  ">
          <Link
            to="/login"
            className="bg-primary text-white font-medium py-2 px-6 rounded-lg hover:bg-green-600 transition-colors duration-200 ease-out w-full text-center"
          >
            Login
          </Link>
          <Link
            to="/login"
            className="bg-gray-100 text-gray-700 font-medium py-2 px-6 rounded-lg hover:bg-green-600 transition-colors duration-200 ease-out w-full text-center"
          >
            Contact Us
          </Link>
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
