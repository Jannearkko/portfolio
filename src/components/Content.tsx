import React, { useEffect, useRef } from 'react';
import '../App.css';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';

const sections = [
  { id: 'home', content: <Home /> },
  { id: 'about', content: <About /> },
  { id: 'resume', content: <Resume /> },
  { id: 'portfolio', content: <Portfolio /> },
  { id: 'contact', content: <Contact /> },
];

const Content: React.FC<{ onSectionChange: (id: string) => void }> = ({ onSectionChange }) => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

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
      { threshold: 0.4, rootMargin: '-10% 0px -10% 0px' }
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
    <main className="h-screen flex-1 overflow-y-auto px-4 pb-8 pt-20 lg:ml-72 lg:px-8 lg:pt-8">
      {sections.map((section, index) => (
        <section
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
          id={section.id}
          key={section.id}
          className="section-spacing"
        >
          {section.content}
        </section>
      ))}
      <footer className="border-t border-surface-600/50 pt-6 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Janne Arkko. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Content;
