// Navbar_comp.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar_comp = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Replace this with the actual logout logic
    console.log("Logging out...");
  };

  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white border ">
        <a className="text-3xl font-bold leading-none" href="#">
          <svg className="h-10" alt="logo" viewBox="0 0 10240 10240">
            {/* Your logo path data */}
          </svg>
        </a>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={toggleMenu}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <NavLink
              to="/Home"
              className={({ isActive }) => {
                return ` text-sm text-black hover:text-blue-600 ${
                  isActive && "text-blue-500"
                } `;
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <NavLink
              to="/About_us"
              className={({ isActive }) => {
                return ` text-sm text-black hover:text-blue-600 ${
                  isActive && "text-blue-500"
                } `;
              }}
            >
              About Us
            </NavLink>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <NavLink
              to="/Contact_Us"
              className={({ isActive }) => {
                return ` text-sm text-black hover:text-blue-600 ${
                  isActive && "text-blue-500"
                } `;
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="flex flex-row gap-4">
          <div className="lg:ml-auto hidden lg:flex justify-items-end py-2 px-7   bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200 justify-between">
            <button onClick={handleLogout} className="float-left">
              Log Out
            </button>
          </div>
          <div>
            <NavLink to="/Upload">
              <button
                onClick={() => setFormSubmitted(false)}
                className=" bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200 py-2 px-7   lg:top-3 right-4 justify-items-end"
              >
                Upload
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
      {/* mobile */}
      <div
        className={`navbar-menu relative z-50  md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-full max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <svg className="h-12" alt="logo" viewBox="0 0 10240 10240">
                {/* Your logo path data */}
              </svg>
            </a>
            <button className="navbar-close" onClick={toggleMenu}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="">
            <ul>
              <li className="mb-1">
                <NavLink
                  to="/Home"
                  className={({ isActive }) => {
                    return ` text-sm text-black hover:text-blue-600 ${
                      isActive && "text-blue-500"
                    } `;
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  to="/About_us"
                  className={({ isActive }) => {
                    return ` text-sm text-black hover:text-blue-600 ${
                      isActive && "text-blue-500"
                    } `;
                  }}
                >
                  About Us
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  to="/Contact_Us"
                  className={({ isActive }) => {
                    return ` text-sm text-black hover:text-blue-600 ${
                      isActive && "text-blue-500"
                    } `;
                  }}
                >
                  Contact
                </NavLink>
              </li>
              <NavLink to="/Upload">
                <li className="mb-1">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    Upload
                  </button>
                </li>
              </NavLink>

              <li className="mb-1">
                <button
                  onClick={handleLogout}
                  className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl"
                href="#"
              >
                Log Out
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar_comp;
