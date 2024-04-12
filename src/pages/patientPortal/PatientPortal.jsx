import React, { useState } from 'react';
import './PatientPortal.css';
import Navbar from '../../components/navbar/Navbar';
import PatientProfile from '../../components/patientProfile/PatientProfile'; 
import Questionnaire from '../../pages/questionnaire/Questionnaire'; // Make sure the path is correct
import { FaUser, FaFileMedical, FaCalendarCheck, FaEnvelope, FaStethoscope } from 'react-icons/fa';

const PatientPortal = () => {
    const [selectedOption, setSelectedOption] = useState('');

    return (
        <div className="patient-portal-container">
            <Navbar />
            <div className="portal-content">
                <aside className="sidebar">
                    <ul className="menu-list">
                        <li onClick={() => setSelectedOption('profile')}><FaUser className="icon" /> Patient Profile</li>
                        <li onClick={() => setSelectedOption('records')}><FaFileMedical className="icon" /> Patient Records</li>
                        <li onClick={() => setSelectedOption('appointments')}><FaCalendarCheck className="icon" /> Appointments</li>
                        <li onClick={() => setSelectedOption('messages')}><FaEnvelope className="icon" /> Messages</li>
                        <li onClick={() => setSelectedOption('symptomChecker')}><FaStethoscope className="icon" /> Symptom Checker</li>
                    </ul>
                </aside>
                <main className="main-content">
                    {selectedOption === 'profile' && <PatientProfile patientData={patientData} />}
                    {selectedOption === 'records' && <div>Patient Records Component</div>}
                    {selectedOption === 'appointments' && <div>Appointments Component</div>}
                    {selectedOption === 'messages' && <div>Messages Component</div>}
                    {selectedOption === 'symptomChecker' && <Questionnaire />}
                </main>
            </div>
        </div>
    );
}

export default PatientPortal;
