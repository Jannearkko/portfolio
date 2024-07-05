import React, { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ProfilePicture from '../images/omakuva.jpg';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';

const Sidebar: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  /* eslint-disable-next-line no-unused-vars */
  const [isHovered, setIsHovered] = useState(false);

  const sections = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'resume', title: 'Resume' },
    { id: 'portfolio', title: 'Portfolio' },
    { id: 'contact', title: 'Contact' },
  ];

  return (
    <aside className="w-64 bg-gray-800 p-4 fixed h-full flex flex-col items-center justify-between">
      <div className="flex flex-col items-center">
        <img
          src={ProfilePicture}
          alt="Profile"
          className="rounded-full mb-4 w-40 h-40 object-cover"
        />
        <h1 className="text-xl font-bold">Janne Arkko</h1>

        <p className="text-gray-400">System Specialist</p>
        <p className="text-gray-400 text-center">Rescue Department of Central Finland</p>

        <div className="flex space-x-4 my-4">
          <a href="https://www.linkedin.com/in/jannearkko/" className="text-white hover:text-gray-400" target='_blank' rel='noopener noreferrer'>
            <LinkedInIcon />
          </a>
          <a href="https://github.com/Jannearkko" className="text-white hover:text-gray-400" target='_blank' rel='noopener noreferrer'>
            <GitHubIcon />
          </a>
        </div>
        <nav className="flex flex-col space-y-2 w-full">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`text-white hover:bg-gray-700 p-2 rounded ${activeSection === section.id ? 'bg-gray-700' : ''}`}
            >
              {section.title}
            </a>
          ))}
        </nav>
      </div>
      <div className="w-full flex justify-center mb-4">
      <a href="portfolio/cv_janne_arkko_2024.pdf" download>
        
      <button
        className="border-2 text-white py-2 px-4 rounded-full flex items-center justify-between relative overflow-hidden hover:bg-customBlue transition-colors duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ height: '50px' }}
      >
        {/* Icon on the left */}
        <DownloadForOfflineOutlinedIcon className="text-white mr-4" fontSize="large" />

        {/* Main Text */}
        <span>
          Download CV
        </span>
      </button>
      </a>
      </div>
    </aside>
  );
};

export default Sidebar;






