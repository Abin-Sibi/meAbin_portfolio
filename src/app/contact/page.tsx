import Footer from '@/components/Footer';
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social media icons

const Contact = () => {
  return (<> <div className="min-h-screen my-20 text-white flex flex-col items-center justify-center px-4">
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg">
          Whether you want to discuss a project or just say hello, I'd love to hear from you!
        </p>
      </section>

      {/* Contact Form */}
      <section className="container max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Me</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-purple-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-purple-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg mb-2">Your Message</label>
            <textarea
              id="message"
              className="w-full h-32 px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-purple-500"
              placeholder="Type your message here..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-purple-700 hover:bg-purple-900 rounded-lg text-white font-bold transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Social Media Links */}
      <section className="flex space-x-6 mt-12">
        <a
          href="https://linkedin.com"
          className="text-3xl hover:text-purple-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com"
          className="text-3xl hover:text-purple-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com"
          className="text-3xl hover:text-purple-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          className="text-3xl hover:text-purple-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </section>
    </div>
    <Footer/>
  </>
   
  );
};

export default Contact;
