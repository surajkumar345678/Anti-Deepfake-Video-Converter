import viteLogo from "/vite.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 shadow-sm border-b border-gray-300 bg-gray-50 font-DMSans">
      <nav className="flex justify-between items-center w-full max-w-[80%] mx-auto">
        <div className="flex items-center space-x-2">
          <img src={viteLogo} alt="Logo" className="h-8" />
          <div className="font-bold text-2xl text-gray-600">
           <a href="/">Anti Deepfake Video Converter</a>
          </div>
        </div>
        <ul className="flex space-x-4 text-gray-600">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 font-bold" : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 font-bold" : ""
              }
              to="/how-it-works"
            >
              How It Works
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 font-bold" : ""
              }
              to="/convert"
            >
              Convert
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 font-bold" : ""
              }
              to="/download"
            >
              Download
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 font-bold" : ""
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
