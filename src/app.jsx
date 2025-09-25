// src/app.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import WorkPage from './pages/work.jsx'
import ProjectPleez from './pages/project-pleez.jsx'
import ProjectSuperfiliate from './pages/project-superfiliate-ds.jsx'
import ProjectViplan from './pages/project-viplan.jsx'


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WorkPage />} />
      <Route path="/project-pleez" element={<ProjectPleez />} />
      <Route path="/project-superfiliate-ds" element={<ProjectSuperfiliate />} />
      <Route path="/project-viplan" element={<ProjectViplan />} />
      <Route path="*" element={<div style={{padding:24}}>404 — Not found</div>} />
    </Routes>
  )
}

