import React from 'react';
import Image from 'next/image';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Info() {
  return (
    <div className='flex flex-col  md:flex-row w-auto gap-6 sm:gap-10 md:gap-40 justify-between px-4 sm:px-6 md:px-10 lg:px-10 mt-6 sm:mt-10 border-t-2 border-x-2 p-6 sm:p-10 md:p-20 rounded-lg border-purple-950 shadow-lg shadow-purple-950'>
      {/* Text section */}
      <div className="order-2 md:order-1 text-center md:text-left max-w-full sm:max-w-sm md:max-w-lg">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Hey</h1>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">I’m Abin Sibi</h2>
        <h3 className="text-xl sm:text-2xl mb-6">
          Mern Stack <span className="text-purple-400 font-bold ">Developer</span>
        </h3>
        <p className="text-base sm:text-lg max-w-xs sm:max-w-md md:max-w-lg mb-5">
          A highly motivated student studying Artificial Intelligence and Machine Learning. Actively seeking opportunities to apply my skills and knowledge to real-world projects and contribute to the advancement of the industry.
        </p>
        <section className="flex space-x-4 sm:space-x-6 justify-center md:justify-start">
          <a
            href="https://linkedin.com"
            className="text-2xl sm:text-3xl hover:text-purple-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            className="text-2xl sm:text-3xl hover:text-purple-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com"
            className="text-2xl sm:text-3xl hover:text-purple-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            className="text-2xl sm:text-3xl hover:text-purple-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </section>
      </div>

      {/* Image section */}
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-lg shadow-lg shadow-purple-700 hover:shadow-2xl hover:shadow-purple-600 overflow-hidden order-1 md:order-2">
        <Image
          src="/Abin.jpg" 
          alt="Profile image"
          fill
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default Info;
