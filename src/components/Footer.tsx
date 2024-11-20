import React from 'react';

const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row w-full justify-between items-center py-10 px-4 bg-transparent border-t-2 text-white'>
      {/* Location and Email */}
      <div className='text-center md:text-left mb-4 md:mb-0'>
        <h3 className='text-lg md:text-xl font-semibold'>Kerala, India</h3>
        <h4 className='text-sm md:text-base'>abin.sibips466@gmail.com</h4>
      </div>
      
      {/* Copyright */}
      <div className='text-center mb-4 md:mb-0'>
        <p className='text-sm md:text-base'>&copy; {new Date().getFullYear()} meAbin</p>
      </div>
      
      {/* Logo/Brand Name */}
      <div className='flex justify-center md:justify-end'>
        <div className="relative p-2 rounded-full shadow-lg hover:rotate-180 transition-all duration-1000 ease-in-out">
          <div className="absolute -inset-0.5 bg-purple-800 opacity-100 blur-2xl rounded-lg"></div>
          <b>
            <strong>
              <h2 className='relative text-white font-serif text-lg md:text-xl'>
                me<span className='text-purple-600 text-2xl md:text-3xl shadow-xl'>A</span>bin
              </h2>
            </strong>
          </b>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
