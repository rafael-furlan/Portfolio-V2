import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkPage from './pages/work.jsx';
import ProjectBase from './pages/project-base.jsx';
import ProjectPleez from './pages/project-pleez.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WorkPage />} />
        <Route path="/project-base" element={<ProjectBase />} />
        <Route path="/project-pleez" element={<ProjectPleez />} />
      </Routes>
    </Router>
  );
}

export default App;
