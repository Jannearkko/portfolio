import React from 'react';

const sections = [
  { id: 'home', title: 'Home', content: 'This is the Home section.' },
  { id: 'about', title: 'About', content: 'This is the About section.' },
  { id: 'resume', title: 'Resume', content: 'This is the Resume section.' },
  { id: 'services', title: 'Services', content: 'This is the Services section.' },
  { id: 'portfolio', title: 'Portfolio', content: 'This is the Portfolio section.' },
  { id: 'contact', title: 'Contact', content: 'This is the Contact section.' },
];

const Content: React.FC = () => {
  return (
    <main className="flex-1 p-4 ml-64 overflow-y-auto h-screen">
      {sections.map((section) => (
        <section id={section.id} key={section.id} className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
          <p>{section.content}</p>
        </section>
      ))}
    </main>
  );
};

export default Content;
