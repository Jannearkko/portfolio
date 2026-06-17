import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Background from './components/Background';
import './App.css';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="relative min-h-screen text-white">
      <Background />
      <div className="content-wrapper mx-auto max-w-screen-xl">
        <Sidebar activeSection={activeSection} />
        <Content onSectionChange={setActiveSection} />
      </div>
    </div>
  );
};

export default App;
