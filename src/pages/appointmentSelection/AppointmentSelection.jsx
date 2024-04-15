import React, { useState, useEffect, useContext } from 'react';
import './AppointmentSelection.css';
import { useLocation, useNavigate } from "react-router-dom";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import { db } from '../../config/firebaseConfig';
import { collection, query, where, getDocs, setDoc, getDoc, doc, updateDoc } from "firebase/firestore";
import ConfirmationModal from '../../components/confirmation/ConfirmationModal';
import { Context } from '../../components/context/AuthContext';

const AppointmentSelection = (props) => {
    const { user } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const urgency = props.urgency;
    const diagnosis = props.diagnosis;
    const [available, setAvailable] = useState([]);
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    const fetchAppointments = async () => {
        const now = new Date();
        const q = query(collection(db, "Availability"), 
            where("severityLevelAccepted", "==", urgency), 
            where("status", "==", "Available"));
        const querySnapshot = await getDocs(q);
        const appointments = querySnapshot.docs
            .map(doc => ({
                id: doc.id,
                title: `Appointment: Severity ${doc.data().severityLevelAccepted}`,
                start: doc.data().startTime,
                end: doc.data().endTime,
                status: doc.data().status
            }))
            .filter(appointment => new Date(appointment.start) > now)//don't show past appointments
        setAvailable(appointments);
    };

    useEffect(() => {
        fetchAppointments();
    }, [urgency]);

    const handleEventClick = ({ event }) => {
        const startDate = new Date(event.startStr);
        const endDate = new Date(event.endStr);
    
        const formatter = new Intl.DateTimeFormat('en-US', {
            month: 'short', 
            day: '2-digit', 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: false
        });
    
        const formattedStart = formatter.format(startDate);
        const formattedEnd = formatter.format(endDate);
        const message = `${formattedStart} - ${formattedEnd}`;
        setSelectedAppointment(message);

        setSelectedAppointment({
            message: message,
            id: event.id
        });
    };

    const closeConfirmationModal = () => {
        setSelectedAppointment(null);
    };

    const handleConfirm = async (id) => {
        const availability = await getDoc(doc(db, "Availability", id)); 
        await setDoc(doc(db, "Appointments", id), {
            patientID: user.uid,
            severity: availability.data().severityLevelAccepted,
            start: availability.data().startTime,
            end: availability.data().endTime,
            initialDiagnosis: diagnosis,
            healthcareProfessionalID: availability.data().healthcareProfessionalID,
        });
        await updateDoc(doc(db, "Availability", id), {
            status: "Unavailable",
        });
        props.onComplete(id)
        //navigate('/appointment-confirmation' , { state: {id: id} });
    }

    const handleBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="fullcalendar-container">
            <button className="navbar-button back-button" onClick={handleBack}>Back</button>
            <h2>Appointment Selection</h2>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                }}
                initialView="dayGridMonth"
                events={available}
                eventClick={handleEventClick}
                validRange={{ start: today }}
                height="auto" 
            />
            {selectedAppointment && (
                <ConfirmationModal
                    isOpen={!!selectedAppointment}
                    onClose={() => setSelectedAppointment(null)}
                    onConfirm={() => handleConfirm(selectedAppointment.id)}
                    message={selectedAppointment.message}
                />
            )}
        </div>
    );
}

export default AppointmentSelection;