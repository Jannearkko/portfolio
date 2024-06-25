import React from 'react';
import useIntersectionObserver from './UseIntersectionObserver';
import Timeline from './Timeline';
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

  const careerTimeline = [
    { year: 2012, title: 'Peacekeeper', description: 'UNIFIL III' },
    { year: 2015, title: 'Firefighter', description: 'Firefighter from 2015-2024' },
    { year: 2018, title: 'Entrepreneur', description: 'Construction business' },
    { year: 2021, title: 'Student of ICT', description: 'JAMK' },
    { year: 2024, title: 'System Specialist', description: 'Software developer' },

  ];

  return (
    <section id="about" className="p-8 text-white">
      <div className="max-w-4xl mx-auto">
        <div ref={headingRef} className="flex items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-left">About Me.</h1>
          <div className="flex-grow h-px bg-gray-500 ml-4 mt-8"></div>
        </div>

        <div ref={bioRef} className="mb-8">
          <p className="text-lg md:text-xl text-gray-300">
            Hi, my name is <span className="font-bold text-white">Janne Arkko</span>. 
            Over the past three years, I have been pursuing my Bachelor's degree, with a focus on programming and machine learning. 
            I am on track to graduate in the <span className="font-bold text-white">fall of 2024</span>, and my academic journey has fueled a deep passion for various aspects of technology. 
            I am particularly interested in software development, machine learning, and the fascinating world of embedded IoT systems and robotics. 
            Additionally, I have a strong enthusiasm for games and the gaming industry, which serves as a hobby, allowing me to use part of my free time to learn game development basics.
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
              <span className="text-white">(+358) 040 5655 290</span>
            </div>
            <div className="grid grid-cols-[150px_50px_auto] mb-4">
              <span className="font-bold">Email</span>
              <span className='text-white'>:</span>
              <span className="text-white">janne.arkko@outlook.com</span>
            </div>
            <div className="grid grid-cols-[150px_50px_auto] mb-4">
              <span className="font-bold">Experience in ICT</span>
              <span className='text-white'>:</span>
              <span className="text-white">3 years (including studies)</span>
            </div>
            <div className="grid grid-cols-[150px_50px_auto] mb-4">
              <span className="font-bold">Total work experience</span>
              <span className='text-white'>:</span>
              <span className="text-white">15 years</span>
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
        <div ref={headingRef} className="flex items-center mb-8 mt-8">
          <h1 className="text-2xl md:text-4xl font-bold text-left">Career Chronicle.</h1>
          <div className="flex-grow h-px bg-gray-500 ml-4 mt-6"></div>
        </div>
        <div ref={bioRef} className="mb-8">
        <Timeline items={careerTimeline} startYear={2011} endYear={2025} />
            
          
        </div>
      </div>
    </section>
  );
};

export default About;



