import React from 'react';
import './PatientPortal.css';
import Navbar from '../../components/navbar/Navbar';
import { FaUser, FaFileMedical, FaCalendarCheck, FaEnvelope, FaStethoscope } from 'react-icons/fa';


const PatientPortal = () => {
    return (
        <div className="patient-portal-container">
            <Navbar />
            <div className="portal-content">
                <aside className="sidebar">
                <ul className="menu-list">
                        <li><FaUser className="icon" /> Patient Profile</li>
                        <li><FaFileMedical className="icon" /> Patient Records</li>
                        <li><FaCalendarCheck className="icon" /> Appointment Manager</li>
                        <li><FaEnvelope className="icon" /> Messages</li>
                        <li><FaStethoscope className="icon" /> Symptom Checker</li>
                    </ul>
                </aside>
                <main className="main-content">
                    <section className="upcoming-visits">
                        <h2>Upcoming Visits</h2>
                          {/* Content for upcoming visits */}
                    </section>
                    {/* main content specific to the selected menu option */}
                </main>
            </div>
        </div>
    );
}

export default PatientPortal;

