import React, { useEffect, useRef } from 'react';
import '../App.css';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
import { FaReact } from 'react-icons/fa';

const sections = [
  { id: 'home', content: <Home /> },
  { id: 'about', content: <About /> },
  { id: 'resume', content: <Resume /> },
  { id: 'portfolio', content: <Portfolio /> },
  { id: 'contact', content: <Contact /> },
];

const Content: React.FC<{ onSectionChange: (id: string) => void }> = ({ onSectionChange }) => {
  const sectionRefs = useRef<any[]>([]);

  useEffect(() => {
    const currentRefs = sectionRefs.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onSectionChange(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [onSectionChange]);

  return (
    <main className="flex-1 p-4 ml-64 overflow-y-auto h-screen">
      {sections.map((section, index) => (
        <section
          ref={(el) => (sectionRefs.current[index] = el)}
          id={section.id}
          key={section.id}
          className="section-spacing"
        >
          <p>{section.content}</p>
        </section>
      ))}
      <div className="flex justify-between items-center mt-4 text-gray-400">
        <p>© 2024 Janne Arkko</p>
        <p className="flex items-center">
          Powered by React <FaReact className="ml-2 text-blue-500" />
        </p>
      </div>
    </main>
  );
};

export default Content;

