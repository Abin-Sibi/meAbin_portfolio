"use client";


import React from 'react';
import Image from 'next/image';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {motion} from 'framer-motion'


const scaleVariants = {
  whileInView:{
    scale: [0,1],
    opacity: [0,1],
    transition:{
      duration: 1,
      ease: 'easeInOut'  
    }
  },
}

function Info() {


  return (
    <div className="flex flex-col md:flex-row w-auto gap-6 sm:gap-10 md:gap-40 justify-between px-4 sm:px-2 md:px-10 lg:px-10 mt-6 sm:mt-10 border-t-2 border-x-2 p-6 sm:p-10 md:p-15 rounded-lg border-purple-950 shadow-lg shadow-purple-950 items-center md:items-start">
  {/* Text section */}
  <motion.div
    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
    transition={{ duration: 0.9 }}
    className="order-2 md:order-1 text-center md:text-left max-w-full sm:max-w-sm md:max-w-lg"
  >
    <h1 className="text-3xl sm:text-4xl font-bold mb-2">Hey</h1>
    <h2 className="text-4xl sm:text-5xl font-bold mb-4">I’m Abin Sibi</h2>
    <h3 className="text-xl sm:text-2xl mb-6">
      MCA <span className="text-purple-400 font-bold">Student</span>
    </h3>
    <p className="text-base sm:text-lg max-w-xs sm:max-w-md md:max-w-lg mb-5">
    A passionate and self-driven student pursuing a Master’s in Computer Applications with a focus on Web and Mobile Development. Eager to apply my skills in MERN stack, flutter, Next.js to real-world projects.
    </p>
    <motion.section
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.9 }}
      className="flex space-x-4 sm:space-x-6 justify-center md:justify-start"
    >
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
    </motion.section>
  </motion.div>

  {/* Image section */}
  <motion.div
    variants={scaleVariants}
    whileInView={scaleVariants.whileInView}
    className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-lg shadow-lg shadow-purple-700 hover:shadow-2xl hover:shadow-purple-600 overflow-hidden order-1 md:order-2 flex justify-center items-center"
  >
    <Image
      src="/Abin.jpg"
      alt="Profile image"
      fill
      objectFit="cover"
      className="rounded-lg"
    />
  </motion.div>
</div>

  );
}

export default Info;
