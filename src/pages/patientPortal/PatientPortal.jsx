import React, { useState } from 'react';
import './PatientPortal.css';
import Navbar from '../../components/navbar/Navbar';
import PatientProfile from '../../components/patientProfile/PatientProfile';
import AppointmentSelection from '../../pages/appointmentSelection/AppointmentSelection';
import Questionnaire from '../../pages/questionnaire/Questionnaire';
import { FaUser, FaFileMedical, FaCalendarCheck, FaEnvelope, FaStethoscope } from 'react-icons/fa';
import PatientRecords from '../../components/patientRecords/PatientRecords';
import PatientAppointments from '../../components/patientAppointments/PatientAppointments';

const PatientPortal = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [appointmentDetails, setAppointmentDetails] = useState(null);

    const handleQuestionnaireComplete = (data) => {
        setAppointmentDetails(data);
        setSelectedOption('appointments');
    };

    return (
        <div className="patient-portal-container">
            <Navbar />
            <div className="portal-content">
                <aside className="sidebar">
                    <ul className="menu-list">
                        <li onClick={() => setSelectedOption('profile')}>
                            <FaUser className="icon" /> Patient Profile
                        </li>
                        <li onClick={() => setSelectedOption('records')}>
                            <FaFileMedical className="icon" /> Patient Records
                        </li>
                        <li onClick={() => setSelectedOption('appointments')}>
                            <FaCalendarCheck className="icon" /> Appointments
                        </li>
                        <li onClick={() => setSelectedOption('symptomChecker')}>
                            <FaStethoscope className="icon" /> Symptom Checker
                        </li>
                    </ul>
                </aside>
                <main className="main-content">
                    {selectedOption === 'profile' && <PatientProfile />}
                    {selectedOption === 'records' && <PatientRecords />}
                    {selectedOption === 'appointments' && <PatientAppointments />}
                    {selectedOption === 'symptomChecker' && <Questionnaire onComplete={handleQuestionnaireComplete} />}
                </main>
            </div>
        </div>
    );
}

export default PatientPortal;
