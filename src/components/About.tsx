import React from 'react';
import useIntersectionObserver from './UseIntersectionObserver';
import 'animate.css';

const About: React.FC = () => {
  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const headingRef = useIntersectionObserver(options);
  const bioRef = useIntersectionObserver(options);
  const infoRef = useIntersectionObserver(options);

  return (
    <section id="about" className="p-8 text-white">
      <div className="max-w-4xl mx-auto">
        <div ref={headingRef} className="flex items-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-left">About Me.</h1>
          <div className="flex-grow h-px bg-gray-500 ml-4"></div>
        </div>

        <div ref={bioRef} className="mb-8">
          <p className="text-lg md:text-xl text-gray-300">
            Hi, my name is <span className="font-bold text-white">Janne Arkko</span>. Over the past three years, I have been pursuing my Bachelor's degree, with a focus on programming and machine learning. I am on track to graduate in the fall of 2024, and my academic journey has fueled a deep passion for various aspects of technology. I am particularly interested in software development, machine learning, and the fascinating world of embedded IoT systems. Additionally, I have a strong enthusiasm for programming games and the gaming industry, which allows me to blend creativity with technical expertise.
          </p>
        </div>

        <div ref={infoRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg md:text-xl text-gray-400">
          <div>
            <div className="grid grid-cols-[150px_50px_auto] mb-4">
              <span className="font-bold">Name</span>
              <span className='text-white'>:</span>
              <span className="text-white">Janne Arkko</span>
            </div>
            <div className="grid grid-cols-[150px_50px_auto] mb-4">
              <span className="font-bold">Nationality</span>
              <span className='text-white'>:</span>
              <span className="text-white">Finland</span>
            </div>
            <div className="grid grid-cols-[150px_50px_auto] mb-4">
              <span className="font-bold">Phone</span>
              <span className='text-white'>:</span>
              <span className="text-white">(+358) 40 5655 290</span>
            </div>
            <div className="grid grid-cols-[150px_50px_auto] mb-4">
              <span className="font-bold">Email</span>
              <span className='text-white'>:</span>
              <span className="text-white">janne.arkko@outlook.com</span>
            </div>
            <div className="grid grid-cols-[150px_50px_auto] mb-4">
              <span className="font-bold">Experience</span>
              <span className='text-white'>:</span>
              <span className="text-white">3+ years</span>
            </div>
            <div className="grid grid-cols-[150px_50px_auto] mb-4">
              <span className="font-bold">Freelance</span>
              <span className='text-white'>:</span>
              <span className="text-white">Negotiable</span>
            </div>
            <div className="grid grid-cols-[150px_50px_auto] mb-4">
              <span className="font-bold">Language</span>
              <span className='text-white'>:</span>
              <span className="text-white">Finnish & English</span>
            </div>
            <div className="grid grid-cols-[150px_50px_auto] mb-4">
              <span className="font-bold">Open for new possibilities?</span>
              <span className='text-white'>:</span>
              <span className="text-white">Yes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;



