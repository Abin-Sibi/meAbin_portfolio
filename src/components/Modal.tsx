"use client";
import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ project, onClose }: { project: any; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-3xl w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-white">
          <FaTimes className="h-6 w-6" />
        </button>
        <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
        <p className="text-gray-400 mb-4">Tech Stack: {project.stack.join(', ')}</p>
        <p className="text-gray-300 mb-6">{project.details}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white bg-purple-700 px-4 py-2 rounded-full hover:bg-purple-900"
        >
          View Source Code
        </a>
      </div>
    </div>
  );
};

export default Modal;
