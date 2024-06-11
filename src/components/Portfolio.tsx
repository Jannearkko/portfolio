import React, { useState } from 'react';
import Modal from './Modal';

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

const portfolioItems = [
  {
    title: 'Notification of Lighting a Fire - Application',
    type: 'SOFTWARE',
    description: `This is a browser-based application for rendering Notifications of Lighting a Fire. 
    These notifications are required by Finnish law when there is an increased risk of fire spreading.\n
    The application helps oversee planned, ongoing, and completed burning events and assists in locating and coordinating rescue personnel to the incident site.\n
    The application is used in the fire department's command center, where all notifications are sent by the Finnish Ministry of Internal Affairs.`,
    technologies: 'Python, Flask, JavaScript, HTML, CSS, Node.js',
    skills: 'Frontend Development, Backend Development, API Integration, Real-time Data Handling',
    databases: 'Sqlite3',
    images: [TulentekoappImage1, TulentekoappImage2, TulentekoappImage3, TulentekoappImage4],
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
  },
  // Add more portfolio items as needed
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
      <section id="portfolio" className="p-8 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            Portfolio.
            <div className="flex-grow h-px bg-gray-500 ml-4"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer"
                onClick={() => openModal(item)}
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="rounded-t-lg w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.type.split(' ').slice(0, 5).join(' ')}</p>
                </div>
              </div>
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
      </section>
    );
  };
  
  export default Portfolio;
