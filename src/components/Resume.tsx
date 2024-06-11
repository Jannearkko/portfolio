import React from 'react';
import { FaUniversity, FaBriefcase, FaCertificate } from 'react-icons/fa';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import useIntersectionObserver from './UseIntersectionObserver';

const educationData = [
  {
    degree: 'Bachelor of IT',
    institution: 'JAMK University of Applied Science',
    years: '2021 - 2024',
    points: '240 ECTS',
    gpa: 'GPA 4.6/5',
    description: 'Advanced studies on software development and AI',
    completed: 'Completed 86 %'
  },
];

const experienceData = [
  {
    position: 'System Specialist',
    company: 'Keski-suomen Hyvinvointialue | Keski-suomen pelastuslaitos',
    years: '2024 - Current',
    description: 'Creating new software to aid in the daily work of the rescue personnel. Enhancing old software and providing expertise and support in all aspects of IT to administrative personnel.'
  },
];

const codingSkills = [
  { skill: 'HTML, CSS', percentage: 82 },
  { skill: 'JavaScript', percentage: 87 },
  { skill: 'React', percentage: 87 },
  { skill: 'Node.js', percentage: 85 },
  { skill: 'Python', percentage: 91 },
  { skill: 'ML', percentage: 83 }
];

const designSkills = [
  { skill: 'Figma', percentage: 39 },
  { skill: 'Gaea', percentage: 18 },
  { skill: 'UE5', percentage: 20 }
];

const softSkills = [
    { skill: 'Communication', percentage: 90 },
    { skill: 'Teamwork', percentage: 85 },
    { skill: 'Problem Solving', percentage: 95 },
    { skill: 'Time Management', percentage: 92 }
];
const certificates = [
  { certificate: 'EITCA/GCML', id: 'EITC/AI/GCML/SLJ24004528', type: 'EITC The European Information Technologies Certification Programme', programme:'EITC/AI/GCML Google Cloud Machine Learning', issued: 'April 2024', validateAddress: 'https://www.eitci.org/validate' },
  { certificate: 'EITCA/GCP', id: 'EITC/CL/GCP/SLJ24004528', type: 'EITC The European Information Technologies Certification Programme', programme:'EITC/CL/GCP Google Cloud Platform', issued: 'April 2024', validateAddress: 'https://www.eitci.org/validate'},
  { certificate: 'EITCA/PPF', id: 'EITC/CP/PPF/SLJ24004528', type: 'EITC The European Information Technologies Certification Programme', programme:'EITC/CP/PPF Python Programming Fundamentals', issued: 'April 2024', validateAddress: 'https://www.eitci.org/validate'},
]
  
const Resume: React.FC = () => {
    const options: IntersectionObserverInit = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
    };

    const resumeRef = useIntersectionObserver(options);

    return (
      <section ref={resumeRef} id="resume" className="p-8 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education Section */}
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <FaUniversity className="mr-2" /> Education.
                <div className="flex-grow h-px bg-gray-500 ml-4 mt-5"></div>
              </h2>
              {educationData.map((item, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-bold">{item.degree}</h3>
                  <p className="text-gray-400">{item.institution}</p>
                  <p className="text-gray-400">{item.years}</p>
                  <p className="text-gray-400">{item.points}</p>
                  <p className="text-gray-400">{item.gpa}</p>
                  <p className="text-gray-400">{item.description}</p>
                  <p className="text-gray-400">{item.completed}</p>
                </div>
              ))}
            </div>
            {/* Experience Section */}
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <FaBriefcase className="mr-2" /> Experience.
                <div className="flex-grow h-px bg-gray-500 ml-4 mt-5"></div>
              </h2>
              {experienceData.map((item, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-bold">{item.position}</h3>
                  <p className="text-gray-400">{item.company}</p>
                  <p className="text-gray-400">{item.years}</p>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Coding Skills Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Coding Skills.</h2>
            <div className="flex space-x-4 overflow-x-auto">
              {codingSkills.map((skill, index) => (
                <div key={index} className="w-24 h-24 flex flex-col items-center">
                  <CircularProgressbar
                    value={skill.percentage}
                    text={`${skill.percentage}%`}
                    styles={buildStyles({
                      textColor: "white",
                      pathColor: "#00d1b2",
                      trailColor: "#363636"
                    })}
                  />
                  <p className="text-gray-400 mt-2 text-center">{skill.skill}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Design Skills and Soft Skills Section */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Design Skills.</h2>
              <div className="flex space-x-4 overflow-x-auto">
                {designSkills.map((skill, index) => (
                  <div key={index} className="w-24 h-24 flex flex-col items-center">
                    <CircularProgressbar
                      value={skill.percentage}
                      text={`${skill.percentage}%`}
                      styles={buildStyles({
                        textColor: "white",
                        pathColor: "#ff3860",
                        trailColor: "#363636"
                      })}
                    />
                    <p className="text-gray-400 mt-2 text-center">{skill.skill}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Soft Skills.</h2>
              <div className="flex space-x-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="w-24 h-24 flex flex-col items-center">
                    <CircularProgressbar
                      value={skill.percentage}
                      text={`${skill.percentage}%`}
                      styles={buildStyles({
                        textColor: "white",
                        pathColor: "#ffdd57",
                        trailColor: "#363636",
                      })}
                    />
                    <p className="text-gray-400 mt-2 text-center text-sm whitespace-nowrap">{skill.skill}</p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
            <h2 className="text-3xl font-bold mb-4 flex items-center mt-20">
                  <FaCertificate className="mr-2" /> Certificates.
                  <div className="flex-grow h-px bg-gray-500 ml-4 mt-5"></div>
            </h2>
            
            <p className='italic text-gray-400 mb-4'>* To validate EITCA-certificates, click the Validate-button and insert the certificate ID and my name.</p>

          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
              {certificates.map((item, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-bold">{item.certificate}</h3>
                  <p className="text-gray-400">Type: {item.type}</p>
                  <p className="text-gray-400">ID: {item.id}</p>
                  <p className="text-gray-400">Name: {item.programme}</p>
                  <p className="text-gray-400">Issued: {item.issued}</p>
                  <a
                    href={item.validateAddress}
                    className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-xl transition duration-300 inline-block mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Validate
                  </a>
                </div>
              ))}
            </div>
        </div>
      </section>
    );
  };
  
  export default Resume;
