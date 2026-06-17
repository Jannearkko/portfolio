import React from 'react';
import useIntersectionObserver from './UseIntersectionObserver';
import 'animate.css';

const keySkills = [
  'TypeScript & React',
  'Java & Spring Boot',
  'Python & Machine Learning',
  'REST APIs & Cloud (GCP)',
  'CI/CD & Docker',
  'Data Analysis',
];

const Home: React.FC = () => {
  const heroRef = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <div
      ref={heroRef}
      className="flex min-h-[80vh] flex-col justify-center px-2 py-8 lg:px-4"
    >
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
        Portfolio
      </p>
      <h1 className="font-heading text-4xl font-bold leading-tight md:text-6xl">
        Janne Arkko
      </h1>
      <p className="mt-4 max-w-2xl text-xl text-gray-300 md:text-2xl">
        Software developer with a background in fire and rescue services.
      </p>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-400">
        I build reliable full-stack applications with a focus on backend systems,
        API design, and practical user experience. This site highlights selected
        projects from my studies and professional work.
      </p>

      <div className="mt-8">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
          Core competencies
        </h2>
        <ul className="flex flex-wrap gap-2">
          {keySkills.map((skill) => (
            <li key={skill} className="skill-pill">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a href="#portfolio" className="btn-primary">
          View projects
        </a>
        <a href="#contact" className="btn-secondary">
          Get in touch
        </a>
        <a
          href="https://github.com/jannearkko"
          className="btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/jannearkko"
          className="btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Home;
