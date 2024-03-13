import React from "react";
import "./Homepage.css";
import SignUp from "../../components/signup/SignUp";
import PatientLogin from "../../components/login/PatientLogin";
import AdminLogin from "../../components/login/AdminLogin";
import { useState } from 'react';

const Homepage = () => {
    const [signUpPopup, setSignUpPopup] = useState(false);
	const [patientLoginPopup, setPatientLoginPopup] = useState(false);
	const [adminLoginPopup, setAdminLoginPopup] = useState(false);

    return (
        <div>
            {/* -------------------------------navbar----------------------------- */}
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src="\assets\logo1.png" alt="Logo" />
                </div>
                <ul className="navbar-menu">
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/services">Services</a>
                    </li>
                </ul>
                <div className="navbar-login">
					<button onClick={() => (setSignUpPopup(true))}>
						Sign Up
					</button>
					<button onClick={() => (setPatientLoginPopup(true))}>
						Patient Login
					</button>
					<button onClick={() => (setAdminLoginPopup(true))}>
						Admin Login
					</button>
				</div>
            </nav>
            {/* -------------------------------hero----------------------------- */}
            <div className="hero">
                <div className="hero_content">
                    <h1 className="headline">
                        Revolutionizing Patient Care with Smart<br></br> Symptom Checking and Scheduling
                    </h1>
                    <p className="description">
                        Streamline your healthcare experience with our<br></br> advanced AI-driven platform designed for both patients and professionals
                    </p>
                    <button class="getstarted" role="button">Get Started</button>
                </div>
            </div>
            <SignUp trigger={signUpPopup} setTrigger={setSignUpPopup} />
			<PatientLogin trigger={patientLoginPopup} setTrigger={setPatientLoginPopup} />
			<AdminLogin trigger={adminLoginPopup} setTrigger={setAdminLoginPopup} />
        </div>
    );
};

export default Homepage;
