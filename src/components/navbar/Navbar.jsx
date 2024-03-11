import React from "react";
import "./Navbar.css";

const Navbar = () => {
	return (
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
				<button onClick={() => (window.location.href = "/patient-login")}>
					Patient Login
				</button>
				<button onClick={() => (window.location.href = "/admin-login")}>
					Admin Login
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
