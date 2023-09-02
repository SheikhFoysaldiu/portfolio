import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Nav = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleItemClick = (item) => {
    console.log(item);
    setActiveItem(item);
    console.log(activeItem);
    setIsMobileMenuOpen(false); // Close the mobile menu when a link is clicked
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { label: "Home", link: "/" },
    { label: "Projects", link: "/projects" },
    { label: "About", link: "/about" },
  ];
  const currentPathname = location.pathname;
  console.log(currentPathname);

  return (
    <>
      <div className="flex px-4 sm:px-12 mx-auto py-4 align-middle">
        <Link
          to="/"
          className="pr-3 py-1 flex items-center space-x-1 text-neutral-900 dark:text-neutral-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
            width="32"
            height="32"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
            ></path>
          </svg>
          <span className="font-sans text-2xl font-semibold">
            Sheikh Foysal
          </span>
        </Link>

        <div className="flex-grow">
          <nav
            className={`hidden md:flex justify-center ml-auto max-w-fit rounded-full bg-neutral-50 px-3 py-2 space-x-3 font-medium drop-shadow-md ${
              isMobileMenuOpen ? "hidden" : ""
            }`}
          >
            <Link
              to="/"
              className={`${
                currentPathname === "/"
                  ? "bg-purple-600 text-neutral-50 rounded-full px-2 py-1"
                  : "px-2 py-1"
              }`}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`${
                currentPathname === "/projects"
                  ? "bg-purple-600 text-neutral-50 rounded-full px-2 py-1"
                  : "px-2 py-1"
              }`}
            >
              Project
            </Link>
            <Link
              to="/about"
              className={`${
                currentPathname === "/about"
                  ? "bg-purple-600 text-neutral-50 rounded-full px-2 py-1"
                  : "px-2 py-1"
              }`}
            >
              About
            </Link>
          </nav>
          <button
            id="dropdown-nav-burger"
            aria-label="toggle-nav"
            className={`block md:hidden ml-auto p-2 bg-neutral-50 hover:bg-neutral-100 rounded-full drop-shadow-md ${
              isMobileMenuOpen ? "hidden" : ""
            }`}
            onClick={toggleMobileMenu}
          >
            <svg
              id="nav-burger-open-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
          <button
            id="dropdown-nav-close"
            aria-label="close-nav"
            className={`block md:hidden ml-auto p-2 bg-neutral-50 hover:bg-neutral-100 rounded-full drop-shadow-md ${
              isMobileMenuOpen ? "" : "hidden"
            }`}
            onClick={toggleMobileMenu}
          >
            <svg
              id="nav-burger-close-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6 ${isMobileMenuOpen ? "" : "hidden"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        id="dropdown-nav"
        className={`block md:hidden ${isMobileMenuOpen ? "" : "hidden"}`}
      >
        <ul class="list-none border rounded-lg space-y-4 px-4 py-5 w-36 absolute right-12 bg-neutral-50 shadow-lg transition-shadow delay-900 z-10">
          <li>
          <Link
              to="/"
              className={`${
                currentPathname === "/"
                  ? "bg-purple-600 text-neutral-50 rounded-full px-2 py-1"
                  : "px-2 py-1"
              }`}
            >
              Home
            </Link>
          </li>

          <li>
          <Link
              to="/projects"
              className={`${
                currentPathname === "/projects"
                  ? "bg-purple-600 text-neutral-50 rounded-full px-2 py-1"
                  : "px-2 py-1"
              }`}
            >
              Project
            </Link>
          </li>
          <li>
          <Link
              to="/about"
              className={`${
                currentPathname === "/about"
                  ? "bg-purple-600 text-neutral-50 rounded-full px-2 py-1"
                  : "px-2 py-1"
              }`}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
