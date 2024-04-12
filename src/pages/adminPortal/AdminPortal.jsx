import React, { useState } from 'react';
import './AdminPortal.css';
import Navbar from '../../components/navbar/Navbar';
import AdminProfile from '../../components/adminProfile/AdminProfile';
import AvailabilityManager from '../../pages/availabilityManager/AvailabilityManager';
import Questionnaire from '../../pages/questionnaire/Questionnaire';
import { FaUser, FaFileMedical, FaCalendarCheck, FaEnvelope, FaStethoscope } from 'react-icons/fa';


const AdminPortal = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [appointmentDetails, setAppointmentDetails] = useState(null);

    const handleQuestionnaireComplete = (data) => {
        setAppointmentDetails(data);
        setSelectedOption('appointmentSelection');
    };

    return (
        <div className="admin-portal-container">
            <Navbar />
            <div className="portal-content">
                <aside className="sidebar">
                    <ul className="menu-list">
                        <li onClick={() => setSelectedOption('profile')}>
                            <FaUser className="icon" /> Admin Profile
                        </li>
                        <li onClick={() => setSelectedOption('appointments')}>
                            <FaCalendarCheck className="icon" /> Appointments
                        </li>
                        <li onClick={() => setSelectedOption('messages')}>
                            <FaEnvelope className="icon" /> Messages
                        </li>
                    </ul>
                </aside>
                <main className="main-content">
                    {selectedOption === 'profile' && <AdminProfile />}
                    {selectedOption === 'appointments' && <AvailabilityManager />} {/* Render the AvailabilityManager component */}
                    {selectedOption === 'messages' && <div>Messages Component</div>} 
                    {selectedOption === 'appointmentSelection' && appointmentDetails && <AppointmentSelection diagnosisData={appointmentDetails} />}
                </main>
            </div>
        </div>
    );
}

export default AdminPortal;
