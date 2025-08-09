import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkPage from './pages/work.jsx';
import ProjectBase from './pages/project-base.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WorkPage />} />
        <Route path="/project-base" element={<ProjectBase />} />
      </Routes>
    </Router>
  );
}

export default App;
