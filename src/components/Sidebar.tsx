import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ProfilePicture from '../images/omakuva.jpg';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 p-4 fixed h-full flex flex-col items-center">
      <img
        src={ProfilePicture}
        alt="Profile"
        className="rounded-full mb-4 w-40 h-40 object-cover"
      />
      <h1 className="text-xl font-bold">Janne Arkko</h1>
      <p className="text-gray-400">Developer</p>
      <div className="flex space-x-4 my-4">
        <a href="https://www.linkedin.com/in/jannearkko" className="text-white hover:text-gray-400">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/Jannearkko" className="text-white hover:text-gray-400">
          <GitHubIcon />
        </a>
      </div>
      <nav className="flex flex-col space-y-2 w-full">
        <a href="#home" className="text-white hover:bg-gray-700 p-2 rounded">
          Home
        </a>
        <a href="#about" className="text-white hover:bg-gray-700 p-2 rounded">
          About
        </a>
        <a href="#resume" className="text-white hover:bg-gray-700 p-2 rounded">
          Resume
        </a>
        <a href="#portfolio" className="text-white hover:bg-gray-700 p-2 rounded">
          Portfolio
        </a>
        <a href="#contact" className="text-white hover:bg-gray-700 p-2 rounded">
          Contact
        </a>
      </nav>
      <button className="bg-pink-500 text-white py-2 px-4 rounded-full mt-4">
        Download CV
      </button>
    </aside>
  );
};

export default Sidebar;



