import React from 'react';
import ProfilePicture from '../images/omakuva.jpg';
import useIntersectionObserver from './UseIntersectionObserver';
import 'animate.css';

const Home: React.FC = () => {
  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const homeRef = useIntersectionObserver(options);

  return (
    <section ref={homeRef} id="home" className="flex flex-col md:flex-row items-start justify-between p-8 h-screen">
      <div className="flex flex-col items-start">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Janne Arkko</h1>
        <h2 className="text-2xl md:text-4xl mb-4 text-gray-300">System Specialist @ Hyvaks</h2>
        <h2 className="text-xl md:text-2xl mb-4 text-gray-300">ICT Engineering student @ JAMK</h2>
        <h2 className="text-xl md:text-2xl text-gray-400 mb-4">Creating new software & enhancing old systems to meet the standards of modern IT at the Rescue Department of Central Finland!</h2>

        <p className="text-lg md:text-xl text-gray-400 mb-6">
          In this website, I will showcase my work and the most notable projects I have been involved with in recent years. My thesis is currently in progress, and I expect to graduate in the fall of 2024.
        </p>

        <h1 className="text-xl md:text-2xl font-bold mb-4 text-gray-300 mt-4">Key Skills</h1>
        <ul className="list-disc list-inside text-lg md:text-xl text-gray-400 mb-6">
        <li>Self-driven Team Player</li>
          <li>Python & Machine Learning</li>
          <li>TypeScript & React</li>
          <li>Data Analysis & Visualization</li>
          <li>Certificates for Google Cloud Computing</li>
          <li>CI/CD with GitHub</li>
        </ul>

        <div className="flex space-x-4 mt-10">
          <a href="#portfolio" className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-full transition duration-300">
            My work
          </a>
          <a href="#contact" className="text-white bg-green-500 hover:bg-green-700 py-2 px-4 rounded-full transition duration-300">
            Contact
          </a>
          <a href="https://github.com/jannearkko" className="text-white bg-gray-800 hover:bg-gray-900 py-2 px-4 rounded-full transition duration-300" target='_blank' rel='noopener noreferrer'>
            GitHub
          </a>
          <a href="https://linkedin.com/in/jannearkko" className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-full transition duration-300" target='_blank' rel='noopener noreferrer'>
            LinkedIn
          </a>
        </div>
      </div>
      <div className="mt-8 md:mt-0 flex-shrink-0 ml-5">
        <img
          src={ProfilePicture}
          alt="Profile"
          className="rounded-xl w-64 h-64 md:w-96 md:h-96 object-cover animate__animated"
        />
      </div>
    </section>
  );
};

export default Home;

