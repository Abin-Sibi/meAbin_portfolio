"use client";

import React, { useState } from 'react';
import { FaCode, FaServer, FaMobileAlt } from 'react-icons/fa'; // Icons for tech stack
import Modal from '../../components/Modal'; // Create a Modal component (step 3 below)
import Footer from '@/components/Footer';

const projects = [
  {
    title: 'TaCa',
    stack: ['Flutter', 'Node.js', 'React.js', 'MongoDB', 'Python', 'Redux'],
    description: 'Restaurants and Catering services listing/filtering.',
    details: `AI/ML-Review based recommendations to users. Book tables by selecting table list of a restaurant. 
              Post authentic reviews with Geolocation images. Restaurant-Manage dynamic table layouts, bookings. 
              Admin-Manage users/restaurants/catering services.`,
    link: 'https://github.com/Abin-Sibi/TaCa',
    icon: FaMobileAlt, // Choose a related icon for the project
  },
  {
    title: 'e-Lens',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Twilio SMS Service'],
    description: 'Product listing, cart, orders, and more with image cropping/zooming features.',
    details: `Admin features include reports, product/user/category management, and payment gateways such as Razorpay and PayPal.`,
    link: 'https://github.com/Abin-Sibi/elens',
    icon: FaCode,
  },
  {
    title: 'TicketsMine',
    stack: ['Node.js', 'React.js', 'MongoDB', 'Express.js', 'Redux', 'Cloudinary', 'Stripe'],
    description: 'Movie listing and seat booking platform with QR code generation.',
    details: `Admin features include graph reports and image upload to Cloudinary. Supports Stripe payment integration.`,
    link: 'https://github.com/Abin-Sibi/TicketsMine-MovieBookingApplication',
    icon: FaServer,
  },
  {
    title: 'TaCa',
    stack: ['Flutter', 'Node.js', 'React.js', 'MongoDB', 'Python', 'Redux'],
    description: 'Restaurants and Catering services listing/filtering.',
    details: `AI/ML-Review based recommendations to users. Book tables by selecting table list of a restaurant. 
              Post authentic reviews with Geolocation images. Restaurant-Manage dynamic table layouts, bookings. 
              Admin-Manage users/restaurants/catering services.`,
    link: 'https://github.com/Abin-Sibi/TaCa',
    icon: FaMobileAlt, // Choose a related icon for the project
  },
  {
    title: 'e-Lens',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Twilio SMS Service'],
    description: 'Product listing, cart, orders, and more with image cropping/zooming features.',
    details: `Admin features include reports, product/user/category management, and payment gateways such as Razorpay and PayPal.`,
    link: 'https://github.com/Abin-Sibi/elens',
    icon: FaCode,
  },
  {
    title: 'TicketsMine',
    stack: ['Node.js', 'React.js', 'MongoDB', 'Express.js', 'Redux', 'Cloudinary', 'Stripe'],
    description: 'Movie listing and seat booking platform with QR code generation.',
    details: `Admin features include graph reports and image upload to Cloudinary. Supports Stripe payment integration.`,
    link: 'https://github.com/Abin-Sibi/TicketsMine-MovieBookingApplication',
    icon: FaServer,
  },
  // Add more projects as needed
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <><section className=" py-16 my-20 sm:px-5 md:px-16 lg:px-24 xl:px-24 px-5">
      <div className="container mx-auto">
        <h2 className="text-4xl text-white text-center mb-12 font-bold">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out hover:scale-105 cursor-pointer transform border-2 border-purple-500"
           
          >
            <project.icon className="text-purple-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-4">Tech Stack: {project.stack.join(', ')}</p>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <button className="text-sm text-white bg-purple-700 px-4 py-2 rounded-full hover:bg-purple-900">
              View Details
            </button>
          </div>
          
          ))}
        </div>

        {selectedProject && (
          <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    </section>
    <Footer/>
    </>
    
  );
};

export default Projects;
