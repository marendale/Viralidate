import React from "react";
import { useLocation } from "react-router-dom";
import './Confirmation.css';

const Confirmation = () => {
    const location = useLocation();
    const id = location.state.id;

    return (
        <h2>Confirmed for appointment {id}!</h2>
    );
};

export default Confirmation