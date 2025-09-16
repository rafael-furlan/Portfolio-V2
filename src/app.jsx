import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkPage from './pages/work.jsx';
import ProjectBase from './pages/project-base.jsx';
import ProjectPleez from './pages/project-pleez.jsx';
import ProjectSuperfiliate from './pages//project-superfiliate-ds.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WorkPage />} />
        <Route path="/project-base" element={<ProjectBase />} />
        <Route path="/project-pleez" element={<ProjectPleez />} />
        <Route path="/project-superfiliate-ds" element={<ProjectSuperfiliate />} />
      </Routes>
    </Router>
  );
}

export default App;
