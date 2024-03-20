/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import PatientPortal from './pages/patientPortal/PatientPortal';
import AdminPortal from './pages/adminPortal/AdminPortal';
import Symptom from './pages/symptomChecking/Symptom';
import AvailabilityManager from './pages/availabilityManager/AvailabilityManager'; // Adjust the import path as necessary
import Questionnaire from './components/questionnaire/Questionnaire';
import Frontpage from './pages/frontpage/Frontpage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/patientportal" element={<PatientPortal />} />
          <Route path="/adminportal" element={<AdminPortal />} />
          <Route path="/availability-manager" element={<AvailabilityManager />} /> {/* New route for managing availability */}
          <Route path="/patientportal/symptom" element={<Symptom />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/frontpage" element={<Frontpage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;