import React, { useState } from 'react';
import Modal from './Modal';
import SectionHeader from './SectionHeader';

import TulentekoappImage1 from '../images/tulentekoapp.png';
import TulentekoappImage2 from '../images/tulentekoapp_1.png';
import TulentekoappImage3 from '../images/tulentekoapp_2.png';
import TulentekoappImage4 from '../images/tulentekoapp_3.png';

import AIappImage1 from '../images/UI_logged_in.png';
import AIappImage2 from '../images/UI_login.png';
import AIappImage3 from '../images/skeleton.png';
import AIappImage4 from '../images/rakenne.png';
import AIappImage5 from '../images/routes.png';
import AIappImage6 from '../images/palvelin_toiminta.png';
import AIappImage7 from '../images/tietokanta.png';

import WAppImage1 from '../images/weather_app_1.png';
import WAppImage2 from '../images/weather_app_2.png';

import Ue1 from '../images/ue5_1.png';
import Ue2 from '../images/ue5_2.png';

/* import docu1 from '../images/docuwash_1.png';
import docu2 from '../images/docuwash_2.png';
import docu3 from '../images/docuwash_3.png';
import docu4 from '../images/docuwash_4.png'; */

import topsecret from '../images/topsecret.jpg';

import f1 from '../images/firefit1.png';
import f2 from '../images/firefit2.png';
import f3 from '../images/firefit3.png';
import f4 from '../images/firefit4.png';
import f5 from '../images/firefit5.png';
import f6 from '../images/firefit6.png';
import f7 from '../images/firefit7.png';
import f8 from '../images/firefit8.png';
import f9 from '../images/firefit9.png';

import { FaFire } from 'react-icons/fa';

import m1 from '../images/m1.jpg';
import m2 from '../images/m2.jpg';
import m3 from '../images/m3.jpg';
import m4 from '../images/m4.jpg';
import m5 from '../images/m5.jpg';
import m6 from '../images/m6.jpg';

const portfolioItems = [
  {
    title: 'Once Upon AI...',
    type: 'MOBILE APP',
    description: `Solo mobile application for AI-generated stories with text-to-speech playback. User experience has been a primary focus alongside backend architecture.\n
    The app is in active development and planned for release on Google Play and the Apple App Store, with OAuth authentication across major providers.\n
    Tech stack: Spring Boot backend with Docker, TypeScript React Native frontend with Expo, Firebase storage, and planned deployment to Cloud Run.`,
    technologies: 'TypeScript, Java Spring Boot, React-Native, Expo',
    skills: 'Full-Stack Development, Mobile Development, AI, UI/UX, Monetization, API Integration, SQL',
    databases: 'PostgreSQL, Firebase',
    images: [m1, m2, m3, m4, m5, m6],
    icon: '',
  },
  {
    title: 'Cybersecurity API',
    type: 'API',
    description: `Four man development of an API for a fundamental flaw in cyber security. Enhancing the safety of personnel and organizations. \n
    Roughly 24% of all cybersecurity incidents are caused by human error. This API would decrease that. Too bad we're on NDA...`,
    technologies: 'Python, FastAPI, Docker, Spring Boot, CI/CD',
    skills: 'API Development and Integration, Backend Development, Dockerization',
    databases: 'PostgreSQL',
    images: [topsecret],
    icon: '',
  },
  {
    title: 'Firefit.kspela.fi - Fitness test booking and management application',
    type: 'SOFTWARE',
    description: `Comprehensive browser application to guide and assist the rescue personnel in scheduling, maintaining, and 
    conducting annual fitness tests. The application features two distinct user interfaces tailored to specific user roles, 
    ensuring optimal functionality and user experience. The application is hosted on the subdomain of kspela.fi.

    The Administrator/Supervisor interface enables supervisors and administrators to manage and schedule work hours 
    for each tester, thereby opening reservable time slots for testees to book fitness tests. It also allows them to oversee 
    personnel and their records and view detailed and insightful statistics, such as utilization rates of booked tests 
    against available time slots, making future scheduling more thoughtful and robust.

    The User interface enables users to book fitness tests in the aforementioned time slots with a responsive design 
    that restricts bookings to designated areas. Tests can only be booked in areas and fire stations where a tester has 
    been assigned by the supervisor, ensuring a smooth and trusted reservation flow. From this interface, testers can 
    take on tests assigned to them, mark them as approved, or schedule breaks, such as lunch breaks, preventing 
    testees from booking tests during these times.
    
    *Note: This application is currently in development.*`,
    technologies: 'TypeScript, React, CSS, Node.js, @MUI, Redux, SQL',
    skills: 'Full-Stack Development, API Integration, SQL-database, Domain Integration',
    databases: 'MariaDB',
    images: [f1, f2, f3, f4, f5, f6, f7, f8, f9],
    icon: <FaFire className='text-orange-500' />,
  },
  {
    title: 'Rendering the Notifications of Lighting a Fire',
    type: 'SOFTWARE',
    description: `This is a browser-based application for rendering Notifications of Lighting a Fire. 
    These notifications are required by Finnish law when there is an increased risk of fire spreading.\n
    The application helps oversee planned, ongoing, and completed burning events and assists in locating and coordinating rescue personnel to the incident site.\n
    The application is used in the fire department's command center, where all notifications are sent by the Finnish Ministry of Internal Affairs.\n
    I developed this app in three weeks including thorough testing. It's not beautiful, but it's simple, functional and much needed.`,
    technologies: 'Python, Flask, JavaScript, HTML, CSS, Node.js',
    skills: 'Frontend Development, Backend Development, API Integration, Real-time Data Handling',
    databases: 'Sqlite3',
    images: [TulentekoappImage1, TulentekoappImage2, TulentekoappImage3, TulentekoappImage4],
    icon: <FaFire className='text-orange-500' />,
  },
  {
    title: 'AI Sentiment Analysis - Application',
    type: 'ARTIFICIAL INTELLIGENCE',
    description: `This is an AI application that can analyze the sentiment of a given text.\n
    The sentiment is predicted by an LSTM (Long Short-Term Memory) model that was trained with several million texts and sentiments. The training data was poor in quality and required extensive processing to be suitable for this project.\n
    The overall accuracy of the model was 83%, with 'Neutral' sentiments being the most difficult to predict.\n
    Each prediction was stored in a MongoDB database for further training and refinement.\n
    Login features were implemented to restrict access to the model, using HTTP-only cookies for validation.\n
    Overall, this was a very educational project on how to build a robust model and implement it into a working application.`,
    technologies: 'TensorFlow, Sequential LSTM, Python, Flask, JavaScript, React.js, Tailwind CSS, Node.js',
    skills: 'Machine Learning, Frontend Development, Backend Development, API Integration, Real-time Predictions and Data Handling',
    databases: 'MongoDB',
    images: [AIappImage1, AIappImage2, AIappImage3, AIappImage4, AIappImage5, AIappImage6, AIappImage7],
    icon: "",
  },
  {
    title: 'Weather Application using Raspberry Pi',
    type: 'SOFTWARE',
    description: `This was a fun project to play around with Raspberry Pi and RuuviTag -sensor.\n
    The project revolved around RuuviTag dumbing sensor readings to a database using bluetooth and the application read the database in real-time and visualized it to the client.\n
    The application was running in my local network and I used my tablet and phone to check the weather using the app. Which was quite neat!`,
    technologies: 'JavaScript, Bash, Node.js, Raspberry Pi, RuuviTag, HTML, CSS',
    skills: 'Bash Scripting, Frontend Development, Backend Development, API Integration, Real-time Data-Handling and Visualization, Plotting',
    databases: 'InfluxDB',
    images: [WAppImage1, WAppImage2],
    icon: '',
  },
  {
    title: 'Unreal Engine 5 demo',
    type: 'GAME DEVELOPMENT',
    description: `I really wish to learn UE5, so in my free-time I try to progress with this scenery.\n
    My goals is so create a very simple Hack & Slash-type of game.\n
    The map layout is made using Gaea.`,
    technologies: 'UE5, Gaea, C++',
    skills: '3D Graphics',
    databases: '-',
    images: [Ue1, Ue2],
    icon: '',
  },

];

const Portfolio: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<any>(null);
  
    const openModal = (project: any) => {
      setSelectedProject(project);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setSelectedProject(null);
      setIsModalOpen(false);
    };
  
    return (
      <div className="px-2 py-8 lg:px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Portfolio"
            subtitle="Selected projects from professional work, studies, and personal development"
          />
          <p className="-mt-6 mb-8 flex items-center text-sm text-gray-500">
            Projects from current employment are marked with
            <FaFire className="ml-2 text-orange-500" aria-hidden="true" />
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <button
                type="button"
                key={index}
                className="card group cursor-pointer overflow-hidden p-0 text-left transition-colors hover:border-accent/40"
                onClick={() => openModal(item)}
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                  <p className="flex items-center justify-between text-sm text-gray-400">
                    {item.type.split(' ').slice(0, 5).join(' ')}
                    {item.icon}
                  </p>
                </div>
              </button>
            ))}
          </div>
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title={selectedProject?.title}
            type={selectedProject?.type}
            description={selectedProject?.description}
            technologies={selectedProject?.technologies}
            skills={selectedProject?.skills}
            databases={selectedProject?.databases}
            images={selectedProject?.images || []}
          />
        </div>
      </div>
    );
  };
  
  export default Portfolio;
