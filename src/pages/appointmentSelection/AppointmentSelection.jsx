import React from "react";
import './AppointmentSelection.css'
import { useLocation } from "react-router-dom";

const AppointmentSelection = () => {
    let location = useLocation();
    console.log(location.state.diagnosis);
    let diagnosis = location.state.diagnosis;
    let urgency = location.state.urgency;
    return location.state.diagnosis ? (
        <div>
            <h2>{diagnosis}</h2>
            <h2>{urgency}</h2>
        </div>
    ) : (
        <h2>{location}</h2>
    );
}

export default AppointmentSelection