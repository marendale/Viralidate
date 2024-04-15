import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import './Confirmation.css';


const Confirmation = (props) => {
    const location = useLocation();
    const navigate = useNavigate(); 
    const id = props.id;

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <h2>Confirmed for appointment {id}!</h2>
            <button className="back-button" onClick={goBack}>Back</button>
            <NavLink to="/survey" className="back-button">Survey</NavLink>
        </div>
    );
};

export default Confirmation;
