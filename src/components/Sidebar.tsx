import React, { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ProfilePicture from '../images/omakuva.jpg';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';

const Sidebar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

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
        <a href="https://www.linkedin.com/in/jannearkko/" className="text-white hover:text-gray-400">
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
      <button
      className="bg-customBlue text-white py-2 px-4 rounded-full mt-4 flex items-center justify-between relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ height: '50px' }} // Ensure consistent height
    >
      {/* Icon on the left */}
      <span
        className={`flex items-center justify-center w-10 h-10 bg-white rounded-full transition-opacity duration-800 ease-in-out ${
          isHovered ? 'opacity-0' : 'opacity-100'
        } absolute left-2`}
      >
        <DownloadForOfflineOutlinedIcon className="text-customBlue" fontSize="large" />
      </span>

      {/* Main Text */}
      <span
        className={`ml-20 transition-opacity duration-800 ease-in-out ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      >
        Download CV
      </span>

      {/* Hover Text */}
      <span
        className={`absolute left-2 transition-opacity duration-800 ease-in-out ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Click here
      </span>

      {/* Icon on the right */}
      <span
        className={`flex items-center justify-center w-10 h-10 rounded-full transition-opacity duration-800 ease-in-out absolute right-2 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <DownloadForOfflineOutlinedIcon fontSize="large" />
      </span>
    </button>
    </aside>
  );
};

export default Sidebar;




