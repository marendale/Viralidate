import React, { useState, useEffect, useContext } from 'react';
import { db } from '../../config/firebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";
import { Context } from '../../components/context/AuthContext';
import './PatientAppointments.css';

const PatientAppointments = () => {
    const { user } = useContext(Context);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        let isMounted = true;  // Flag to track whether component is mounted

        const fetchAppointments = async () => {
            if (!user || !user.uid) {
                console.log('No user ID available');
                return;
            }

            try {
                const now = new Date();
                const q = query(
                    collection(db, "Appointments"),
                    where("patientID", "==", user.uid),
                );

                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                    const fetchedAppointments = querySnapshot.docs.map(doc => {
                        const data = doc.data();
                        return {
                            ...data,
                            id: doc.id,
                            start: new Date(data.start).toLocaleString(),
                            end: new Date(data.end).toLocaleString(),
                        };
                    }).filter(appointment => new Date(appointment.start) > now);

                    if (isMounted) {
                        setAppointments(fetchedAppointments);
                    }
                } else {
                    console.log('No upcoming appointments found.');
                    if (isMounted) {
                        setAppointments([]);
                    }
                }
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        fetchAppointments();

        return () => {
            isMounted = false;  // Set the flag to false when the component unmounts
        };
    }, [user]);

    return (
        <div className="patient-appointments-container">
            <h2>Patient Appointments</h2>
            {appointments.length > 0 ? (
                <ul>
                    {appointments.map(appointment => (
                        <li key={appointment.id}>
                            <div>Title: {appointment.initialDiagnosis}</div>
                            <div>Start: {appointment.start}</div>
                            <div>End: {appointment.end}</div>
                            <div>Severity: {appointment.severity}</div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>No upcoming appointments.</div>
            )}
        </div>
    );
};

export default PatientAppointments;
