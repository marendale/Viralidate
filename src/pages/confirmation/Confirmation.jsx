import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Confirmation.css';

const Confirmation = () => {
    const location = useLocation();
    const navigate = useNavigate(); 
    const id = location.state.id;

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <h2>Confirmed for appointment {id}!</h2>
            <button className="back-button" onClick={goBack}>Back</button>
        </div>
    );
};

export default Confirmation;
