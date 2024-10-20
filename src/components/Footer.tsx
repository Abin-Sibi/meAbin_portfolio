import React from 'react';

const Footer = () => {
  return (
    <>
    <footer className='flex flex-row w-full justify-between py-10 p-4 bg-transparent border-t-2 text-white  left-0 right-0 -50'>
      <div>
        <h3>Kerala, India</h3>
        <h4>abin.sibips466@gmail.com</h4>
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()} meAbin</p>
      </div>
      <div>
        <div className="relative p-2 rounded-full shadow-lg hover:rotate-180 transition-all duration-1000 ease-in-out">
          <div className="absolute -inset-0.5 bg-purple-800 opacity-100 blur-2xl rounded-lg"></div>
          <b>
            <strong>
              <h2 className='relative text-white font-serif text-lg'>
                me<span className='text-purple-600 text-3xl shadow-xl'>A</span>bin
              </h2>
            </strong>
          </b>
        </div>
      </div>
    </footer>
    </>
    
  );
};

export default Footer;
