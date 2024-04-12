import React from 'react';
import './AdminPortal.css';
import Navbar from '../../components/navbar/Navbar';
import { FaUser, FaFileMedical, FaCalendarCheck, FaEnvelope, FaStethoscope } from 'react-icons/fa';
import AvailabilityManager from '../availabilityManager/AvailabilityManager';


const AdminPortal = () => {
    return (
        <div className="admin-portal-container">
            <Navbar />
            <div className="portal-content">
                <aside className="sidebar">
                <ul className="menu-list">
                        <li><FaUser className="icon" /> Admin Profile</li>
                        <li><FaFileMedical className="icon" /> Admin Records</li>
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

export default AdminPortal;

