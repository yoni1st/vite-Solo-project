import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [navbar, setNavbar] = useState(true);
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="relative bg-white">
      <div className=" mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-between md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 items-center">
            <NavLink to="/">
              <img className="h-8 w-auto sm:h-10" src="./cbe.png" alt="logo" />
            </NavLink>
            <span className="ml-2">Icam Atm</span>
          </div>

          <nav className="hidden space-x-10 md:flex items-center">
            <NavLink activeclassname="active" to="/add-user">
              Add User
            </NavLink>
            <NavLink activeclassname="active" to="/Body">
              ICAM ATM
            </NavLink>
            <NavLink activeclassname="active" to="/account">
              Manage Account
            </NavLink>
          </nav>
          <div className="hidden md:flex">
            <button
              className="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
              onClick={() => setisOpen(!isOpen)}
            >
              <img className="h-full w-full object-cover" src="cbe.png" />
            </button>

            <button
              className={`fixed top-0 right-0 bottom-0 left-0 h-full w-full bg-black opacity-50 cursor-default ${
                isOpen ? "block" : "hidden"
              }`}
              onClick={() => setisOpen(!isOpen)}
            ></button>

            <div
              className={`absolute right-0 mt-9 py-2 w-28 bg-white rounded-lg shadow-xl ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                <NavLink to="/login-in">Sign out</NavLink>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between">
            {/* <div className="flex items-center ">
                <NavLink to="/">
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="./cbe.png"
                    alt="logo"
                  />
                </NavLink>
                <span className="ml-2">Icam Atm</span>
              </div> */}

            <div
              className={`-my-2 -mr-2 md:hidden ${navbar ? "block" : "hidden"}`}
              onClick={() => setNavbar(!navbar)}
            >
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>

            <div
              className={`-my-2 -mr-2 md:hidden ${navbar ? "hidden" : "block"}`}
              onClick={() => setNavbar(!navbar)}
            >
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on mobile menu state. */}
      <div className="relative inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="px-5 pt-4 pb-4"></div>
          <div className={`space-y-6 py-6 px-5 ${navbar ? "hidden" : "block"}`}>
            <div className="grid grid-cols-1 gap-y-4 gap-x-8">
              <NavLink activeclassname="active" to="/add-user">
                Add User
              </NavLink>
              <NavLink activeclassname="active" to="/Body">
                ICAM ATM
              </NavLink>
              <NavLink activeclassname="active" to="/account">
                Manage Account
              </NavLink>

              <div className="relative justify-self-end">
                <button
                  className="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
                  onClick={() => setisOpen(!isOpen)}
                >
                  <img className="h-full w-full object-cover" src="cbe.png" />
                </button>

                <button
                  className={`fixed top-0 right-0 bottom-0 left-0 h-full w-full bg-black opacity-50 cursor-default ${
                    isOpen ? "block" : "hidden"
                  }`}
                  onClick={() => setisOpen(!isOpen)}
                ></button>

                <div
                  className={`absolute right-0 mt-2 py-2 w-28 bg-white rounded-lg shadow-xl ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  <a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                    <NavLink to="/login-in">Sign out</NavLink>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
