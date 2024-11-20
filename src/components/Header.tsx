"use client";

import React, { useState } from "react";
import {
  HomeIcon,
  EnvelopeIcon,
  DocumentIcon,
  UserIcon,
  BriefcaseIcon,
  SunIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-3 w-full rounded-xl mx-auto flex justify-between items-center left-0 right-0 z-50 px-5">
        {/* Bar Icon */}
        <div className="relative">
          <div className="relative p-2 rounded-full shadow-lg">
            <div className="absolute -inset-0.5 bg-purple-800 opacity-100 blur-2xl rounded-lg"></div>
            <Bars2Icon
              className="relative h-10 w-10 hover:text-yellow-400 text-white bg-black p-1 m-3 rounded-lg lg:hidden block cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>

          {/* Sidebar Buttons */}
          {isSidebarOpen && (
            <div
              className="absolute top-full left-5 bg-purple-950 shadow-lg rounded-lg px-3 space-y-3 w-48 z-40"
              onClick={(e) => e.stopPropagation()} // Prevent sidebar close on button clicks
            >
              {[
                { href: "/", label: "Home", icon: <HomeIcon className="h-5 w-5" /> },
                { href: "/projects", label: "Projects", icon: <BriefcaseIcon className="h-5 w-5" /> },
                { href: "/", label: "Resume", icon: <DocumentIcon className="h-5 w-5" /> },
                { href: "/about", label: "About", icon: <UserIcon className="h-5 w-5" /> },
                { href: "/contact", label: "Contact", icon: <EnvelopeIcon className="h-5 w-5" /> },
              ].map((nav, index) => (
                <Link key={index} href={nav.href} passHref>
                  <button onClick={closeSidebar} className="flex items-center space-x-3 bg-gradient-to-r from-purple-800 to-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:from-purple-700 hover:to-purple-500 w-full my-5">
                    {nav.icon}
                    <span>{nav.label}</span>
                  </button>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="relative p-2 rounded-full shadow-lg hover:rotate-180 transition-all duration-1000 ease-in-out">
          <div className="absolute -inset-0.5 bg-purple-800 opacity-100 blur-2xl rounded-lg"></div>
          <b>
            <strong>
              <h2 className="relative text-white font-serif text-lg">
                me<span className="text-purple-600 text-3xl shadow-xl">A</span>bin
              </h2>
            </strong>
          </b>
        </div>

        <nav className="container mx-auto p-4 w-fit items-center justify-center bg-transparent rounded-lg backdrop-blur-xl hidden lg:flex">
          <div className="flex space-x-5 ">
            {[
              { href: "/", label: "Home", icon: <HomeIcon className="h-5 w-5 " /> },
              { href: "/projects", label: "Projects", icon: <BriefcaseIcon className="h-5 w-5" /> },
              { href: "/", label: "Resume", icon: <DocumentIcon className="h-5 w-5" /> },
              { href: "/about", label: "About", icon: <UserIcon className="h-5 w-5" /> },
              { href: "/contact", label: "Contact", icon: <EnvelopeIcon className="h-5 w-5" /> },
            ].map((nav, index) => (
              <Link key={index} href={nav.href} passHref>
                <button className="px-4 py-2 bg-gradient-to-r from-purple-950 to-purple-800 text-white rounded-lg shadow-lg transition duration-300 hover:from-purple-700 hover:to-purple-900 flex items-center space-x-2">
                  {nav.icon}
                  <span>{nav.label}</span>
                </button>
              </Link>
            ))}
          </div>
        </nav>

        <div className="relative p-2 rounded-full shadow-lg">
          <div className="absolute -inset-0.5 bg-purple-800 opacity-100 blur-2xl rounded-lg"></div>
          <SunIcon className="relative h-10 w-10 hover:text-yellow-400 text-white bg-black p-1 m-3 rounded-lg" />
        </div>
      </header>

      {/* Overlay to close sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-30"
          onClick={closeSidebar} // Close sidebar when clicking outside
        ></div>
      )}
    </>
  );
};

export default Header;
