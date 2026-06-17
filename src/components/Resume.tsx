import React from 'react';
import { FaUniversity, FaBriefcase, FaCertificate } from 'react-icons/fa';
import useIntersectionObserver from './UseIntersectionObserver';
import SectionHeader from './SectionHeader';

const educationData = [
  {
    degree: 'Bachelor of IT',
    institution: 'JAMK University of Applied Sciences',
    years: '2021 – 2024',
    points: '240 ECTS',
    gpa: 'GPA 4.6 / 5',
    description: 'Advanced studies in software development and artificial intelligence',
    completed: 'Completed',
  },
];

const experienceData = [
  {
    position: 'System Specialist',
    company: 'Keski-Suomen hyvinvointialue · Keski-Suomen pelastuslaitos',
    years: 'May 2024 – November 2024',
    description:
      'Developed software to support daily operations for rescue personnel. Maintained existing systems and provided IT expertise to administrative staff.',
  },
];

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    skills: ['TypeScript', 'React', 'Node.js', 'Python', 'Spring Boot', 'C#', 'C++'],
  },
  {
    title: 'Practices & Tools',
    skills: ['REST APIs', 'Machine Learning', 'OOP', 'Docker', 'CI/CD', 'Figma', 'PostgreSQL'],
  },
  {
    title: 'Professional strengths',
    skills: ['Communication', 'Teamwork', 'Problem solving', 'Time management', 'Self-directed learning'],
  },
];

const certificates = [
  {
    certificate: 'EITCA/GCML',
    id: 'EITC/AI/GCML/SLJ24004528',
    type: 'EITC – European Information Technologies Certification Programme',
    programme: 'Google Cloud Machine Learning',
    issued: 'April 2024',
    validateAddress: 'https://www.eitci.org/validate',
  },
  {
    certificate: 'EITCA/GCP',
    id: 'EITC/CL/GCP/SLJ24004528',
    type: 'EITC – European Information Technologies Certification Programme',
    programme: 'Google Cloud Platform',
    issued: 'April 2024',
    validateAddress: 'https://www.eitci.org/validate',
  },
  {
    certificate: 'EITCA/PPF',
    id: 'EITC/CP/PPF/SLJ24004528',
    type: 'EITC – European Information Technologies Certification Programme',
    programme: 'Python Programming Fundamentals',
    issued: 'April 2024',
    validateAddress: 'https://www.eitci.org/validate',
  },
];

const Resume: React.FC = () => {
  const resumeRef = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <div ref={resumeRef} className="px-2 py-8 lg:px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Resume"
          subtitle="Education, experience, skills, and certifications"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
              <FaUniversity className="text-accent" />
              Education
            </h3>
            {educationData.map((item) => (
              <div key={item.degree} className="card mb-4">
                <h4 className="text-lg font-bold">{item.degree}</h4>
                <p className="text-gray-400">{item.institution}</p>
                <p className="text-gray-400">{item.years}</p>
                <p className="text-gray-400">{item.points} · {item.gpa}</p>
                <p className="mt-2 text-gray-300">{item.description}</p>
                <p className="mt-2 text-sm font-medium text-accent">{item.completed}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
              <FaBriefcase className="text-accent" />
              Experience
            </h3>
            {experienceData.map((item) => (
              <div key={item.position} className="card mb-4">
                <h4 className="text-lg font-bold">{item.position}</h4>
                <p className="text-gray-400">{item.company}</p>
                <p className="text-gray-400">{item.years}</p>
                <p className="mt-2 text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-6 text-xl font-semibold">Skills</h3>
          <div className="grid gap-6 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <div key={category.title} className="card">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                  {category.title}
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="skill-pill">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold">
            <FaCertificate className="text-accent" />
            Certificates
          </h3>
          <p className="mb-6 text-sm italic text-gray-500">
            To validate EITCA certificates, use the Validate button and enter the certificate ID with my name.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {certificates.map((item) => (
              <div key={item.id} className="card">
                <h4 className="text-lg font-bold">{item.certificate}</h4>
                <p className="text-sm text-gray-400">{item.type}</p>
                <p className="mt-2 text-sm text-gray-400">ID: {item.id}</p>
                <p className="text-sm text-gray-400">{item.programme}</p>
                <p className="text-sm text-gray-400">Issued: {item.issued}</p>
                <a
                  href={item.validateAddress}
                  className="btn-primary mt-4 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Validate
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
