import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Sphere from './components/Sphere';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-white flex justify-center animated-bg">
      <Router>
        <div className="w-full max-w-screen-xl flex bg-gradient-to-r from-gray-900 to-gray-700 content-wrapper">
          <Sidebar />
          <Content />
        </div>
      </Router>
      <Sphere size={300} startX={100} startY={100} speedX={1} speedY={1} />
      <Sphere size={300} startX={400} startY={200} speedX={-1} speedY={0.5} />
    </div>
  );
};

export default App;



