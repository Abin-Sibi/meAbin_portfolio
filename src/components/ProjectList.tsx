"use client";

import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { FaCode, FaServer, FaMobileAlt } from 'react-icons/fa';
import Modal from '../components/Modal';
import Link from 'next/link'; // Import the Link component

const ProjectList = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const refs = useRef([]); // Array of refs

  // Initialize VanillaTilt for each project card
  useEffect(() => {
    refs.current.forEach((ref) => {
      if (ref) {
        VanillaTilt.init(ref, {
          max: 25, // Maximum tilt
          speed: 400, // Transition speed
          glare: true, // Enable glare effect
          "max-glare": 0.5, // Maximum glare opacity
        });
      }
    });
  }, []);

  const projects = [
    {
      title: 'TaCa',
      stack: ['Flutter', 'Node.js', 'React.js', 'MongoDB', 'Python', 'Redux'],
      description: 'Restaurants and Catering services listing/filtering.',
      details: `AI/ML-Review based recommendations to users. Book tables by selecting table list of a restaurant. 
                Post authentic reviews with Geolocation images. Restaurant-Manage dynamic table layouts, bookings. 
                Admin-Manage users/restaurants/catering services.`,
      link: 'https://github.com/Abin-Sibi/TaCa',
      icon: FaMobileAlt,
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
  ];

  return (
    <section className="my-20 px-0 lg:px-28 sm:px-0">
      <div className="container mx-auto">
        <h2 className="text-4xl text-white text-center mb-12 font-bold">My Projects</h2>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              ref={(el) => (refs.current[index] = el)} // Assign ref to each project card
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer transform border-2 border-purple-400 hover:border-purple-800"
            >
              <project.icon className="text-purple-500 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">Tech Stack: {project.stack.join(', ')}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <button className="text-sm text-white bg-gradient-to-r from-purple-800 to-purple-950 px-4 py-2 rounded-full hover:bg-purple-900">
                View Details
              </button>
            </div>
          ))}
        </div>

        {selectedProject && (
          <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>

      {/* Use Link to navigate instead of useRouter */}
      <Link href="/projects" passHref>
        <button className='border-2 p-2 m-5 border-purple-800 px-10 rounded-3xl bg-transparent hover:bg-gradient-to-r from-purple-700 to-purple-900'>
          View All
        </button>
      </Link>
    </section>
  );
};

export default ProjectList;
