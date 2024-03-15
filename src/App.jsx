import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import PatientPortal from './pages/patientPortal/PatientPortal';
import AdminPortal from './pages/adminPortal/AdminPortal';
import Symptom from './pages/symptomChecking/Symptom';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/patientportal" element={<PatientPortal />} />
          <Route path="/adminportal" element={<AdminPortal />} />
          <Route path="/patientportal/symptom" element={<Symptom />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App