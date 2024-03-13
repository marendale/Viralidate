import React from "react";
import "./Navbar.css";
import SignUp from "../signup/SignUp";
import PatientLogin from "../login/PatientLogin";
import AdminLogin from "../login/AdminLogin";
import { useState } from 'react';

const Navbar = () => {
	const [signUpPopup, setSignUpPopup] = useState(false);
	const [patientLoginPopup, setPatientLoginPopup] = useState(false);
	const [adminLoginPopup, setAdminLoginPopup] = useState(false);

	return (
		<div>
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
			<SignUp trigger={signUpPopup} setTrigger={setSignUpPopup} />
			<PatientLogin trigger={patientLoginPopup} setTrigger={setPatientLoginPopup} />
			<AdminLogin trigger={adminLoginPopup} setTrigger={setAdminLoginPopup} />
		</div>
	);
};

export default Navbar;
