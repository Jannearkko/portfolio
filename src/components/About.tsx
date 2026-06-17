import React from 'react';
import useIntersectionObserver from './UseIntersectionObserver';
import Timeline from './Timeline';
import SectionHeader from './SectionHeader';
import 'animate.css';

const About: React.FC = () => {
  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const bioRef = useIntersectionObserver(options);
  const infoRef = useIntersectionObserver(options);

  const careerTimeline = [
    { year: 2012, title: 'Peacekeeper', description: 'UNIFIL III' },
    { year: 2015, title: 'Firefighter', description: 'Rescue services' },
    { year: 2018, title: 'Entrepreneur', description: 'Construction business' },
    { year: 2021, title: 'ICT Student', description: 'JAMK University of Applied Sciences' },
    { year: 2024, title: 'System Specialist', description: 'Software development' },
  ];

  const infoRows = [
    { label: 'Name', value: 'Janne Arkko' },
    { label: 'Location', value: 'Finland' },
    { label: 'Phone', value: '+358 40 565 5290' },
    { label: 'Email', value: 'janne.arkko@outlook.com' },
    { label: 'ICT experience', value: '3 years (including studies)' },
    { label: 'Total work experience', value: '15 years' },
    { label: 'Languages', value: 'Finnish & English' },
    { label: 'Open to opportunities', value: 'Yes' },
  ];

  return (
    <div className="px-2 py-8 lg:px-4">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          title="About Me"
          subtitle="Background, experience, and career path"
        />

        <div ref={bioRef} className="mb-10">
          <p className="text-lg leading-relaxed text-gray-300">
            I am a software developer with a background in fire and rescue services.
            I completed my Bachelor of IT at JAMK University of Applied Sciences in
            November 2024, with a focus on software development and machine learning.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-300">
            My interests include backend development, applied machine learning, and
            embedded IoT systems. I also explore game development as a personal hobby
            and a way to deepen my understanding of interactive software.
          </p>
        </div>

        <div ref={infoRef} className="card mb-12">
          <dl className="grid gap-4 sm:grid-cols-2">
            {infoRows.map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                <dt className="min-w-[10rem] text-sm font-medium text-gray-500">{label}</dt>
                <dd className="text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <SectionHeader title="Career Timeline" />
        <Timeline items={careerTimeline} startYear={2011} endYear={2025} />
      </div>
    </div>
  );
};

export default About;
