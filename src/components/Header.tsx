import React from 'react';
import { HomeIcon, EnvelopeIcon, DocumentIcon, UserIcon, BriefcaseIcon, SunIcon, Bars2Icon } from '@heroicons/react/24/solid'; // Updated for Heroicons v2
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-3 w-full  rounded-xl mx-auto flex justify-between items-center left-0 right-0  z-50  px-5">
      <div className="relative p-2 rounded-full  shadow-lg">
        <div className="absolute -inset-0.5   bg-purple-800 opacity-100 blur-2xl rounded-lg">
        </div>
      <Bars2Icon className="relative h-10 w-10 hover:text-yellow-400 text-white bg-black p-1 m-3 rounded-lg lg:hidden block" />
      </div>

      <div className="relative p-2 rounded-full shadow-lg hover:rotate-180 transition-all duration-1000 ease-in-out">
        <div className="absolute -inset-0.5 bg-purple-800 opacity-100 blur-2xl rounded-lg">
        </div>
        <b>
          <strong>
            <h2 className='relative text-white font-serif text-lg'>
              me<span className='text-purple-600 text-3xl shadow-xl'>A</span>bin
            </h2>
          </strong>
        </b>
      </div>


      <nav className="container mx-auto p-4 w-fit items-center justify-center bg-transparent rounded-lg backdrop-blur-xl hidden lg:flex">
        <div className="flex space-x-5">
          <Link href="/" passHref>
            <button
              className="px-4 py-2 bg-gradient-to-r from-purple-950 to-purple-800 text-white rounded-lg shadow-lg transition duration-300 hover:from-purple-700 hover:to-purple-900 flex items-center space-x-2"
            >
              <HomeIcon className="h-5 w-5" />
              <span>Home</span>
            </button>
          </Link>


          <Link href="/projects" passHref><button
            className="px-4 py-2 bg-gradient-to-r from-purple-950 to-purple-800 text-white rounded-lg shadow-lg transition duration-300 hover:from-purple-700 hover:to-purple-900 flex items-center space-x-2"
          >
            <BriefcaseIcon className="h-5 w-5" />
            <span>Projects</span>
          </button>
          </Link>


          <Link href="/" passHref> <button
            className="px-4 py-2 bg-gradient-to-r from-purple-950 to-purple-800 text-white rounded-lg shadow-lg transition duration-300 hover:from-purple-700 hover:to-purple-900 flex items-center space-x-2"
          >
            <DocumentIcon className="h-5 w-5" />
            <span>Resume</span>
          </button>
          </Link>

          <Link href="/about" passHref><button
            className="px-4 py-2 bg-gradient-to-r from-purple-950 to-purple-800 text-white rounded-lg shadow-lg transition duration-300 hover:from-purple-700 hover:to-purple-900 flex items-center space-x-2"
          >
            <UserIcon className="h-5 w-5" />
            <span>About</span>
          </button></Link>


          <Link href="/contact" passHref><button
            className="px-4 py-2 bg-gradient-to-r from-purple-950 to-purple-800 text-white rounded-lg shadow-lg transition duration-300 hover:from-purple-700 hover:to-purple-900 flex items-center space-x-2"
          >
            <EnvelopeIcon className="h-5 w-5" />
            <span>Contact</span>
          </button></Link>

        </div>
      </nav>
      <div className="relative p-2 rounded-full  shadow-lg">
        <div className="absolute -inset-0.5   bg-purple-800 opacity-100 blur-2xl rounded-lg">
        </div>
        <SunIcon className="relative h-10 w-10 hover:text-yellow-400 text-white bg-black p-1 m-3 rounded-lg " />
      </div>
    </header>
  );
};

export default Header;
