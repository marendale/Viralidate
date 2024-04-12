import React, { useState } from 'react';
import './PatientPortal.css';
import Navbar from '../../components/navbar/Navbar';
import PatientProfile from '../../components/patientProfile/PatientProfile'; 
import { FaUser, FaFileMedical, FaCalendarCheck, FaEnvelope, FaStethoscope } from 'react-icons/fa';

const PatientPortal = () => {
    const [selectedOption, setSelectedOption] = useState('');

    // Dummy data for the patient profile
    const patientData = {
        image: '/path/to/image.jpg', 
        name: 'John Doe',
        dob: '1990-01-01',
        age: 33,
        weight: 70,
        height: 175,
        mobilePhone: '123-456-7890',
        homePhone: '098-765-4321',
        workPhone: '567-890-1234',
        email: 'john.doe@example.com',
        homeAddress: '1234 Main St, Anytown, AT 12345',
        emergencyContact: 'Jane Doe - 987-654-3210'
    };

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
                    {selectedOption === 'symptomChecker' && <div>Symptom Checker Component</div>}
                </main>
            </div>
        </div>
    );
}

export default PatientPortal;
